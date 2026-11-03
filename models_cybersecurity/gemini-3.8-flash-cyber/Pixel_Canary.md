# Gemini 3.8 Flash Cyber — findings by Pixel Canary

- Source: Google DeepMind (`google/gemini-3-8-flash-cyber`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber (Google DeepMind; OpenCode ID `google/gemini-3-8-flash-cyber`; **no Zen Free ID**)
- **Short description:** Google's cybersecurity specialisation of Gemini 3.8 Flash, fine-tuned for finding, validating and patching vulnerabilities and distributed to vetted defenders through the **Fairwind Program** rather than a public API. Successor to Gemini 3.5 Flash Cyber.
- **Provider / access:** Google DeepMind / Google Cloud via the Fairwind Program (access is organisation-vetted; onboarding and rate limits are not public). No self-serve endpoint, so tool-calling/structured-output availability is inferred from the Gemini 3.8 Flash base it is built on.
- **Release / knowledge:** Announced in the 2026 Gemini 3.8 wave; BenchLM still lists the context window and overall score as "Coming soon" and the model as **Unranked**. Knowledge cutoff not published.
- **Context window:** 1,048,576 input / 65,000 output per the site card (`meta.json`), inherited from Gemini 3.8 Flash — BenchLM has not yet confirmed it.
- **Modalities:** Text and code in; text and code out. Reasoning: yes. No image/audio/video surface documented for this ID.
- **Pricing (as of 2026-09-29):** **Not publicly priced** — Fairwind Program participation terms only. This is the key practical constraint, not capability.
- **Architecture:** Proprietary security specialisation of Gemini 3.8 Flash; no parameter count or weights published.

### Raw benchmarks found

BenchLM profile (updated 2026-09-28) carries **only 2 of 486 benchmarks** and no composite score — it lists "no source-displayable overall score" and leaves the model unranked:

- CyberGym: **86.2%** (real-world vulnerability-discovery gym; the same suite scores frontier generalists in the 84–95% band, e.g. GLM-5.3 84.5%, MiMo-V2.6-Flash 95.1%)
- CWE-Bench: **47.2%** (patching real CWE-class vulnerabilities end-to-end)

Missing for this exact ID: every general suite — SWE-bench family, Terminal-Bench, GDPval-AA, GPQA/HLE, MRCR/AA-LCR, MMMU, τ-bench, Omniscience/hallucination — because the model is not benchmarked publicly, and no independent harness has published a full profile.

### Normalized scores (1–100)

- **Tool use: 70/100.** CyberGym 86.2% is a tool-heavy, multi-step discovery gym and it clears it near the top of the field, so agentic security work is well-evidenced; capped because no general agent suite (τ-bench, Toolathlon, GDPval) has a published row for this ID and the access model prevents independent replication.
- **Reasoning: 55/100.** It is a reasoning model on a reasoning-class base, but the only published general proxy is indirect — CWE-Bench 47.2% shows the reasoning chain succeeds on roughly half of real vulnerability classes, and there is no GPQA/HLE/Intelligence-Index row.
- **Context window: 60/100.** 1M input / 65K output inherited from Gemini 3.8 Flash is excellent for whole-repository auditing, yet BenchLM still lists the window as "Coming soon" and there is no MRCR/AA-LCR measurement for this ID, so the figure is inherited rather than proven.
- **Multimodal: 40/100.** Text and code in/out only as documented; no image, audio, video or PDF surface is published for this ID, which caps the dimension architecturally regardless of base-model capability.
- **Coding: 78/100.** As a security coder it is strong where it counts (CyberGym 86.2% discovery, CWE-Bench 47.2% end-to-end patching on real CVEs), but general software-engineering breadth is unmeasured and half of CWE classes still fail patching.
- **Cost efficiency: 35/100.** No public price list, no free tier, and vetted-program-only access: for a repo whose scoring rewards transparent, self-serve pricing this is the binding constraint even if the model itself is excellent.
- **Overall Score: 60.6/100.** (70 + 55 + 60 + 40 + 78) / 5 = 303 / 5 = 60.6 — a specialist defensive-security model judged on two security suites; treat it as a program-gated capability, not a general-purpose model row.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gemini-3-8-flash-cyber` refreshed 2026-09-28 — 2 of 486 benchmarks, no composite; Google DeepMind Fairwind Program announcements; site `meta.json` for window/modality). Scores are normalized 1–100 interpretations built on very thin public evidence, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
