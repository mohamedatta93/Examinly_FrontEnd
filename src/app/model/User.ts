export class User {
  private ID: number;
  private name: String;
  private userName: String;
  private email: String;
  private birthDate: Date;
  private password: String;
  private token: String;
  private provider: String;
  private profileImgPath: String;

  /**
   * Getter $ID
   * @return {number}
   */
  public get $ID(): number {
    return this.ID;
  }

  /**
   * Setter $ID
   * @param {number} value
   */
  public set $ID(value: number) {
    this.ID = value;
  }

  /**
   * Getter $name
   * @return {String}
   */
  public get $name(): String {
    return this.name;
  }

  /**
   * Setter $name
   * @param {String} value
   */
  public set $name(value: String) {
    this.name = value;
  }

  /**
   * Getter $userName
   * @return {String}
   */
  public get $userName(): String {
    return this.userName;
  }

  /**
   * Setter $userName
   * @param {String} value
   */
  public set $userName(value: String) {
    this.userName = value;
  }

  /**
   * Getter $email
   * @return {String}
   */
  public get $email(): String {
    return this.email;
  }

  /**
   * Setter $email
   * @param {String} value
   */
  public set $email(value: String) {
    this.email = value;
  }



  /**
   * Getter $birthDate
   * @return {Date}
   */
  public get $birthDate(): Date {
    return this.birthDate;
  }

  /**
   * Setter $birthDate
   * @param {Date} value
   */
  public set $birthDate(value: Date) {
    this.birthDate = value;
  }

  /**
   * Getter $password
   * @return {String}
   */
  public get $password(): String {
    return this.password;
  }

  /**
   * Setter $password
   * @param {String} value
   */
  public set $password(value: String) {
    this.password = value;
  }

    /**
     * Getter $token
     * @return {String}
     */
	public get $token(): String {
		return this.token;
	}

    /**
     * Setter $token
     * @param {String} value
     */
	public set $token(value: String) {
		this.token = value;
	}

    /**
     * Getter $provider
     * @return {String}
     */
	public get $provider(): String {
		return this.provider;
	}

    /**
     * Setter $provider
     * @param {String} value
     */
	public set $provider(value: String) {
		this.provider = value;
	}

    /**
     * Getter $profileImgPath
     * @return {String}
     */
	public get $profileImgPath(): String {
		return this.profileImgPath;
	}

    /**
     * Setter $profileImgPath
     * @param {String} value
     */
	public set $profileImgPath(value: String) {
		this.profileImgPath = value;
	}


public	constructor() {
	}

}