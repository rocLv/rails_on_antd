module Api
  class AuthController < ActionController::Base
   # skip_before_filter :authenticate_user!
    def create
      user = User.find_by_email [user_params[:email]]
      if user.valid_password? user_params[:password]
        sign_in user
        render json: {success: true}
      else
        render nothing: true, status: 401
      end
    end

    private

      def user_params
        params.require(:user).permit(:email, :password, :authenticity_token)
      end
  end
end
