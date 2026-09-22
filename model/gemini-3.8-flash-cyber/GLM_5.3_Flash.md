# Gemini 3.8 Flash Cyber — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemini-3.8-flash-cyber` — Fairwind-gated; no public API ID)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber (gated defensive-security deployment; no Free-tier wording)
- **Short description:** Google DeepMind's cybersecurity-specialized deployment of the 3.8 Flash core, tuned for vulnerability discovery, validation and automated patching with more permissive cyber safeguards — exclusively for vetted defenders via the Fairwind Program (650+ partners). Used standalone or with CodeMender; already securing Google's own code.
- **Provider / access:** Google DeepMind managed deployment only — no public API, no published model ID, no self-hosting. Fairwind Program: governments, critical-infrastructure operators, software maintainers, core technology platforms; academic defensive labs may apply. CodeMender Public Preview is a separate, public path. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Announced September 2, 2026 alongside GA Gemini 3.8 Flash (Google's third Flash release in six weeks; builds on 3.7 Flash). Predecessor: Gemini 3.5 Flash Cyber limited pilot (July 2026). Knowledge cutoff not disclosed.
- **IDs:** none published for the Cyber deployment (public twin: `gemini-3.8-flash`).
- **Context window:** Not disclosed for the Cyber deployment. The public 3.8 Flash documents 1,048,576 input / 65,536 max output — presumed but not confirmed inherited (folder meta carries 1M/65K; independent analysts explicitly warn against copying Flash specs into the Cyber column).
- **Modalities:** Not disclosed for Cyber ("text, code in; text, code out" per folder meta). Base 3.8 Flash documents text, image, video, audio and PDF input with text output — inheritance unverified.
- **Pricing (as of 2026-09-19):** No public rate card. "Flash-level cost" is Google's characterization; the only public dollar figure is $3.64 mean billed API cost per CWE-Bench rollout (vs Fable 5's $10.27). Fairwind terms are contractual. No free tier.
- **Architecture:** Proprietary, closed weights; same foundational intelligence as 3.8 Flash ("one core model, two access envelopes"); cyber-specific mitigations relaxed for vetted defenders under Google's Frontier Safety Framework.

### Raw benchmarks found

Agent / tool use:

Agent / tool use:

- CyberGym (final-submission setting): **86.2% Pass@1** — led Google's five-model comparison (GPT-5.5-Cyber 85.6%, Claude Mythos 5 83.8%, GPT-5.6 Sol 83.6%, Gemini 3.5 Flash Cyber 77.5%); caveat: different owners' proprietary harnesses
- CWE-Bench v0 (held-out repository audit-and-patch): **47.2% Pass@1**, $3.64 mean cost per rollout (2nd to Fable 5's 47.8% at $10.27 — same pass rate, ~1/3 the cost; GPT-5.6 Sol 44.2% at $2.29)
- Gray Swan indirect prompt injection: **6.0% ASR@15** (lower is better; base 3.8 Flash 5.5%, Claude Opus 5 4.8%)
- Private 20-language vulnerability set: no public numbers
- Terminal-Bench / Tau / GDPval / MCP-Atlas / Claw-Eval: no verified public score found for the Cyber deployment

Real-world (vendor/partner-reported, not benchmark rows):

- Chrome Security team: **2.6x more correct Chrome vulnerability patches** than much larger best commercial models
- Wiz: **+7.5–9.7% higher recall** on internal pentest benchmark at **2.3–5.2x lower cost** vs leading frontier models
- Google Cloud Vulnerability Research: found a critical foundational vulnerability in **<2 hours** (normally months of research)

Reasoning / knowledge:

- No GPQA / HLE / AA Intelligence Index / LCR numbers published for the Cyber deployment (vendor positions it on the same core intelligence as 3.8 Flash, described as "our best reasoning and coding model yet" at Flash speed/cost — base-model claims, not Cyber rows)

Coding:

- CWE-Bench v0: **47.2%** (see above) — patch-production evidence
- SWE-bench Verified / Pro / Terminal-Bench / DeepSWE / SciCode: no verified public score found for Cyber
- CodeMender integration: automated fix generation for Fairwind users

Long context:

- No long-context retrieval numbers published for the Cyber deployment; base Flash window presumed inherited but unverified

### Normalized scores (1–100)

- **Tool use: 78/100.** CyberGym 86.2% Pass@1 tops its five-model set and CWE-Bench 47.2% matches Fable 5 at ~1/3 the rollout cost, but every number is vendor-run on proprietary harnesses, no independent lab has access, and standard tool rows (TB/Tau/GDPval) are absent for the gated deployment.
- **Reasoning: 70/100.** No published reasoning rows for Cyber itself; scored on the vendor's "same foundational intelligence as 3.8 Flash" positioning (its best-yet reasoning at Flash cost) with a provisional dock for the missing public evidence.
- **Context window: 85/100.** Presumed 1M/65K inheritance from base 3.8 Flash (meta carries 1M) — inside the ≥1M tier but docked for the undisclosed Cyber window and zero retrieval numbers.
- **Multimodal: 20/100.** Documented Cyber surface is text/code in, text/code out; base Flash's image/video/audio/PDF inputs are not confirmed for this deployment — scored as text-only-band provisionally per the folder meta.
- **Coding: 78/100.** CWE-Bench audit-and-patch 47.2% at $3.64/rollout and the Chrome 2.6x-patch result show real code-production capability; no SWE-bench/TB rows and the security-narrow evaluation set cap it.
- **Cost efficiency: 60/100.** No public rate card — scored mid-band on "Flash-level cost" positioning plus Wiz's 2.3–5.2x-cheaper-than-frontier recall data; unverifiable pricing and a gated contract model keep it well below commodity anchors.
- **Overall Score: 66.2/100.** (78+70+85+20+78)/5 = 66.2. Best fit: vetted defensive-security teams (Fairwind) doing vulnerability discovery and patching at Flash economics; not evaluable or purchasable by the general public.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Google blog announcement, Kingy AI disclosure-gap audit, Apidog Fairwind guide, LLMReference card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


