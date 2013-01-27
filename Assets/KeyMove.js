#pragma strict

function Start () {

}

function Update () {
	transform.rotation *=
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 30.0 * Time.deltaTime,
							 Vector3(0, 0, 1));
}