class ShipmentController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def index
		# hash containing alpha-2 country codes
		@country_list = {"VA"=>"Holy See (Vatican City State)", "CC"=>"Cocos (Keeling) Islands", "GT"=>"Guatemala", "JP"=>"Japan", "SE"=>"Sweden", "TZ"=>"Tanzania, United Republic of", "CD"=>"Congo, the Democratic Republic of the", "GU"=>"Guam", "MM"=>"Myanmar", "DZ"=>"Algeria", "MN"=>"Mongolia", "PK"=>"Pakistan", "SG"=>"Singapore", "VC"=>"Saint Vincent and the Grenadines", "CF"=>"Central African Republic", "GW"=>"Guinea-Bissau", "MO"=>"Macao", "PL"=>"Poland", "SH"=>"Saint Helena", "CG"=>"Congo", "MP"=>"Northern Mariana Islands", "PM"=>"Saint Pierre and Miquelon", "SI"=>"Slovenia", "VE"=>"Venezuela", "ZW"=>"Zimbabwe", "CH"=>"Switzerland", "GY"=>"Guyana", "MQ"=>"Martinique", "PN"=>"Pitcairn", "SJ"=>"Svalbard and Jan Mayen", "CI"=>"C\303\264te d'Ivoire", "MR"=>"Mauritania", "SK"=>"Slovakia", "VG"=>"Virgin Islands, British", "MS"=>"Montserrat", "SL"=>"Sierra Leone", "CK"=>"Cook Islands", "ID"=>"Indonesia", "MT"=>"Malta", "SM"=>"San Marino", "VI"=>"Virgin Islands, U.S.", "YE"=>"Yemen", "CL"=>"Chile", "IE"=>"Ireland", "LA"=>"Lao People's Democratic Republic", "MU"=>"Mauritius", "SN"=>"Senegal", "CM"=>"Cameroon", "FI"=>"Finland", "LB"=>"Lebanon", "MV"=>"Maldives", "PR"=>"Puerto Rico", "SO"=>"Somalia", "CN"=>"China", "FJ"=>"Fiji", "LC"=>"Saint Lucia", "MW"=>"Malawi", "PS"=>"Palestinian Territory, Occupied", "CO"=>"Colombia", "FK"=>"Falkland Islands (Malvinas)", "MX"=>"Mexico", "PT"=>"Portugal", "MY"=>"Malaysia", "SR"=>"Suriname", "VN"=>"Viet Nam", "FM"=>"Micronesia, Federated States of", "MZ"=>"Mozambique", "CR"=>"Costa Rica", "PW"=>"Palau", "FO"=>"Faroe Islands", "ST"=>"Sao Tome and Principe", "IL"=>"Israel", "LI"=>"Liechtenstein", "PY"=>"Paraguay", "BA"=>"Bosnia and Herzegovina", "CU"=>"Cuba", "IM"=>"Isle of Man", "SV"=>"El Salvador", "CV"=>"Cape Verde", "FR"=>"France", "IN"=>"India", "LK"=>"Sri Lanka", "BB"=>"Barbados", "IO"=>"British Indian Ocean Territory", "VU"=>"Vanuatu", "CX"=>"Christmas Island", "RE"=>"R\303\251union", "UA"=>"Ukraine", "SY"=>"Syrian Arab Republic", "CY"=>"Cyprus", "IQ"=>"Iraq", "SZ"=>"Swaziland", "BD"=>"Bangladesh", "CZ"=>"Czech Republic", "IR"=>"Iran, Islamic Republic of", "YT"=>"Mayotte", "BE"=>"Belgium", "IS"=>"Iceland", "BF"=>"Burkina Faso", "EC"=>"Ecuador", "IT"=>"Italy", "OM"=>"Oman", "BG"=>"Bulgaria", "BH"=>"Bahrain", "LR"=>"Liberia", "UG"=>"Uganda", "BI"=>"Burundi", "EE"=>"Estonia", "LS"=>"Lesotho", "BJ"=>"Benin", "LT"=>"Lithuania", "EG"=>"Egypt", "BL"=>"Saint Barth\303\251lemy", "EH"=>"Western Sahara", "LU"=>"Luxembourg", "RO"=>"Romania", "BM"=>"Bermuda", "LV"=>"Latvia", "BN"=>"Brunei Darussalam", "UM"=>"United States Minor Outlying Islands", "BO"=>"Bolivia", "KE"=>"Kenya", "NA"=>"Namibia", "LY"=>"Libyan Arab Jamahiriya", "BR"=>"Brazil", "KG"=>"Kyrgyzstan", "NC"=>"New Caledonia", "RS"=>"Serbia", "BS"=>"Bahamas", "HK"=>"Hong Kong", "KH"=>"Cambodia", "BT"=>"Bhutan", "KI"=>"Kiribati", "NE"=>"Niger", "QA"=>"Qatar", "RU"=>"Russian Federation", "HM"=>"Heard Island and McDonald Islands", "NF"=>"Norfolk Island", "US"=>"United States", "BV"=>"Bouvet Island", "ER"=>"Eritrea", "HN"=>"Honduras", "NG"=>"Nigeria", "RW"=>"Rwanda", "BW"=>"Botswana", "ES"=>"Spain", "ET"=>"Ethiopia", "NI"=>"Nicaragua", "AD"=>"Andorra", "BY"=>"Belarus", "KM"=>"Comoros", "AE"=>"United Arab Emirates", "BZ"=>"Belize", "HR"=>"Croatia", "KN"=>"Saint Kitts and Nevis", "TC"=>"Turks and Caicos Islands", "AF"=>"Afghanistan", "NL"=>"Netherlands", "TD"=>"Chad", "AG"=>"Antigua and Barbuda", "HT"=>"Haiti", "KP"=>"Korea, Democratic People's Republic of", "UY"=>"Uruguay", "GA"=>"Gabon", "HU"=>"Hungary", "TF"=>"French Southern Territories", "UZ"=>"Uzbekistan", "AI"=>"Anguilla", "DE"=>"Germany", "GB"=>"United Kingdom", "KR"=>"Korea, Republic of", "TG"=>"Togo", "NO"=>"Norway", "TH"=>"Thailand", "GD"=>"Grenada", "NP"=>"Nepal", "ZA"=>"South Africa", "AL"=>"Albania", "GE"=>"Georgia", "TJ"=>"Tajikistan", "WF"=>"Wallis and Futuna", "AM"=>"Armenia", "GF"=>"French Guiana", "NR"=>"Nauru", "TK"=>"Tokelau", "AN"=>"Netherlands Antilles", "DJ"=>"Djibouti", "KW"=>"Kuwait", "TL"=>"Timor-Leste", "AO"=>"Angola", "DK"=>"Denmark", "GG"=>"Guernsey", "TM"=>"Turkmenistan", "GH"=>"Ghana", "JE"=>"Jersey", "MA"=>"Morocco", "KY"=>"Cayman Islands", "NU"=>"Niue", "TN"=>"Tunisia", "DM"=>"Dominica", "GI"=>"Gibraltar", "KZ"=>"Kazakhstan", "TO"=>"Tonga", "AQ"=>"Antarctica", "MC"=>"Monaco", "AR"=>"Argentina", "MD"=>"Moldova, Republic of", "AS"=>"American Samoa", "DO"=>"Dominican Republic", "ME"=>"Montenegro", "PA"=>"Panama", "TR"=>"Turkey", "AT"=>"Austria", "GL"=>"Greenland", "MF"=>"Saint Martin (French part)", "NZ"=>"New Zealand", "AU"=>"Australia", "GM"=>"Gambia", "MG"=>"Madagascar", "GN"=>"Guinea", "AW"=>"Aruba", "MH"=>"Marshall Islands", "TT"=>"Trinidad and Tobago", "ZM"=>"Zambia", "GP"=>"Guadeloupe", "PE"=>"Peru", "SA"=>"Saudi Arabia", "AX"=>"\303\205land Islands", "GQ"=>"Equatorial Guinea", "CA"=>"Canada", "SB"=>"Solomon Islands", "PF"=>"French Polynesia", "TV"=>"Tuvalu", "WS"=>"Samoa", "JM"=>"Jamaica", "MK"=>"Macedonia, the former Yugoslav Republic of", "GR"=>"Greece", "SC"=>"Seychelles", "TW"=>"Taiwan, Province of China", "AZ"=>"Azerbaijan", "PG"=>"Papua New Guinea", "PH"=>"Philippines", "GS"=>"South Georgia and the South Sandwich Islands", "SD"=>"Sudan", "JO"=>"Jordan", "ML"=>"Mali"}.sort_by{|key, val| val}
		if session[:item]
			counter = 0
			session[:item].each{|x| counter += x['amount'].to_i}
			redirect_to shop_index_path(anchor: 'middle_half') if counter == 0
		else
			raise ActionController::RoutingError.new('Not Found')
		end
	end

	def create
		# MujoNYC ShippoToken key (private auth token)
		Shippo::api_token = 'c8182218ae6f0517b79282c0ce455174758eb70d'

		# Create address_from object
		address_from = {
		  :object_purpose => 'PURCHASE',
		  :name => 'Mujo NYC',
		  :street1 => 'Broadway',
		  :street_no => '230',
		  :street2 => '#2A',
		  :city => 'Brooklyn',
		  :state => 'NY',
		  :zip => '11211',
		  :country => 'US',
		  :phone => '+1 650 521 2541',
		  :email => 'info@mujonyc.com'}

		# Create address_to object
		address_to = {
		  :object_purpose => 'PURCHASE',
		  :name => params['shipping_name'],
		  :street1 => params['shipping_address_1'],
		  :street2 => params['shipping_address_2'],
		  :city => params['shipping_city'],
		  :state => params['shipping_state'],
		  :zip => params['shipping_zip_code'],
		  :country => params['shipping_country'],
		  :phone => params['shipping_telephone'],
		  :email => params['shipping_email']
		}

		# Create different restrictions based on country
		if address_to[:country] == "US" || address_to[:country] == "CA"
			if address_to[:name] == "" || address_to[:street1] == "" || address_to[:city] == "" || address_to[:state] == "" || address_to[:zip] == "" || address_to[:country] == "" || address_to[:email] == "" || address_to[:phone] == ""
				session[:shipment_error] = "Please fill in required blank fields"
				render json: {error: session[:shipment_error]}
			elsif !ValidateEmail.valid?(address_to[:email])
				session[:shipment_error] = "Please enter valid email address"
				render json: {error: session[:shipment_error]}
			elsif address_to[:state].length != 2
				session[:shipment_error] = "Please enter 2 letter abbreviation of state"
				render json: {error: session[:shipment_error]}
			else
				validation = Shippo::Address.create(address_to).validate()
				if validation['object_state'] === 'INVALID'
					session[:shipment_error] = validation['messages'].first[:text]
					render json: {error: session[:shipment_error]}
				else
					# keep track of shipping addresses when arriving at checkout page
					Address.create(
						name: address_to[:name],
						street1: address_to[:street1],
						street2: address_to[:street2],
						city: address_to[:city],
						state: address_to[:state],
						zip: address_to[:zip],
						country: address_to[:country],
						phone: address_to[:phone],
						email:address_to[:email]
					)
					session[:address_from] = address_from
					session[:address_to] = address_to
					redirect_to checkout_index_path
				end
			end
		else
			if address_to[:name] == "" || address_to[:street1] == "" || address_to[:city] == "" || address_to[:zip] == "" || address_to[:country] == "" || address_to[:email] == "" || address_to[:phone] == ""
				session[:shipment_error] = "Please fill in required blank fields"
				render json: {error: session[:shipment_error]}
			elsif !ValidateEmail.valid?(address_to[:email])
				session[:shipment_error] = "Please enter valid email address"
				render json: {error: session[:shipment_error]}
			else
				validation = Shippo::Address.create(address_to).validate()
				if validation['object_state'] === 'INVALID'
					session[:shipment_error] = validation['messages'].first[:text]
					render json: {error: session[:shipment_error]}
				else
					# keep track of shipping addresses when arriving at checkout page
					Address.create(
						name: address_to[:name],
						street1: address_to[:street1],
						street2: address_to[:street2],
						city: address_to[:city],
						state: address_to[:state],
						zip: address_to[:zip],
						country: address_to[:country],
						phone: address_to[:phone],
						email:address_to[:email]
					)
					session[:address_from] = address_from
					session[:address_to] = address_to
					redirect_to checkout_index_path
				end
			end
		end
	end

end