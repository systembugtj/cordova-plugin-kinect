using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WindowsPreview.Kinect;

namespace Kinect.Proxy
{
    //- See more at: http://www.ekino.com/kinect-v2-implementation-javascript/#sthash.TPZVSjxF.dpuf
    public sealed class KinectProxy
    {
        private static KinectSensor _sensor;

        public static void Start()
        {
            //get sensor
            KinectProxy._sensor = KinectSensor.GetDefault();
            KinectProxy._sensor.Open();
        }

        public static void Stop()
        {
            if (KinectProxy._sensor != null)
                KinectProxy._sensor.Close();
        }

    }
}
