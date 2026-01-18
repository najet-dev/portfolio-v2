// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "tech-logo"
  const techLogos = document.querySelectorAll(".tech-logo");

  // Check if the browser supports IntersectionObserver
  if ("IntersectionObserver" in window) {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries, observer) => {
        // Loop through each observed element
        entries.forEach((entry) => {
          // If the element is visible in the viewport (at least 20% visible)
          if (entry.isIntersecting) {
            // Add the "visible" class to the element
            entry.target.classList.add("visible");
          } else {
            // Remove the "visible" class when the element goes out of view
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.2, // The element is considered visible if 20% of it is in view
      },
    );

    // Start observing each logo element
    techLogos.forEach((logo) => {
      observer.observe(logo);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver:
    // Just make all logos visible
    techLogos.forEach((logo) => logo.classList.add("visible"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-modal");

  const acceptBtn = document.getElementById("cookie-accept");
  const refuseBtn = document.getElementById("cookie-refuse");
  const settingsBtn = document.getElementById("cookie-settings");
  const saveBtn = document.getElementById("cookie-save");
  const cancelBtn = document.getElementById("cookie-cancel");

  const analyticsCheckbox = document.getElementById("analytics-cookies");

  if (!localStorage.getItem("cookieConsent")) {
    banner.style.display = "block";
  }

  acceptBtn.onclick = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ analytics: true }));
    banner.style.display = "none";
  };

  refuseBtn.onclick = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ analytics: false }));
    banner.style.display = "none";
  };

  settingsBtn.onclick = () => {
    modal.style.display = "flex";
  };

  cancelBtn.onclick = () => {
    modal.style.display = "none";
  };

  saveBtn.onclick = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        analytics: analyticsCheckbox.checked,
      }),
    );
    modal.style.display = "none";
    banner.style.display = "none";
  };
});
//Poup up cookies
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cookie-overlay");

  const infoView = document.getElementById("cookie-info");
  const settingsView = document.getElementById("cookie-settings");

  const openSettings = document.getElementById("open-settings");
  const backInfo = document.getElementById("back-info");

  const acceptAll = document.getElementById("accept-all");
  const refuseAll = document.getElementById("refuse-all");
  const saveSettings = document.getElementById("save-settings");

  const analytics = document.getElementById("analytics");

  if (!localStorage.getItem("cookieConsent")) {
    overlay.style.display = "flex";
  }

  openSettings.onclick = () => {
    infoView.classList.remove("active");
    settingsView.classList.add("active");
  };

  backInfo.onclick = () => {
    settingsView.classList.remove("active");
    infoView.classList.add("active");
  };

  acceptAll.onclick = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ analytics: true }));
    overlay.style.display = "none";
  };

  refuseAll.onclick = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ analytics: false }));
    overlay.style.display = "none";
  };

  saveSettings.onclick = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        analytics: analytics.checked,
      }),
    );
    overlay.style.display = "none";
  };
});
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cookie-overlay");
  const infoView = document.getElementById("cookie-info");
  const settingsView = document.getElementById("cookie-settings");

  const btnSettings = document.getElementById("cookie-settings-btn");
  const btnBack = document.getElementById("cookie-back");
  const btnAccept = document.getElementById("cookie-accept");
  const btnRefuse = document.getElementById("cookie-refuse");
  const btnSave = document.getElementById("cookie-save");

  if (localStorage.getItem("cookieConsent")) {
    overlay.style.display = "none";
    return;
  }

  btnSettings.addEventListener("click", () => {
    infoView.classList.remove("active");
    settingsView.classList.add("active");
  });

  btnBack.addEventListener("click", () => {
    settingsView.classList.remove("active");
    infoView.classList.add("active");
  });

  btnAccept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "all");
    overlay.style.display = "none";
  });

  btnRefuse.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "essential");
    overlay.style.display = "none";
  });

  btnSave.addEventListener("click", () => {
    const analytics = document.getElementById("analyticsCookies").checked;
    localStorage.setItem(
      "cookieConsent",
      analytics ? "analytics" : "essential",
    );
    overlay.style.display = "none";
  });
});

//croix
document.getElementById("cookie-close").addEventListener("click", () => {
  document.getElementById("cookie-overlay").style.display = "none";
});
