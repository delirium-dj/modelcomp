# Gemini 3.8 Flash Cyber — findings by Fledge Alpha

- Source: Google (`gemini-3.8-flash-cyber`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's Sept 2, 2026 cybersecurity-tuned variant of Gemini 3.8 Flash, gated to trusted defenders through the Fairwind Program.
- **Provider / access:** Fairwind Program-approved organizations only; not in the public Gemini API.
- **Release / knowledge:** 2026-09-02.
- **IDs:** Not disclosed for the Cyber deployment.
- **Context window:** Same Flash tier as 3.8 Flash (1,048,576 input / 65,536 output class).
- **Modalities:** Text, image, video, audio, PDF in; text out (per shared Flash base).
- **Pricing:** No public rate card — vendor describes it as "Flash-level cost"; CWE-Bench runs billed ~$3.64/rollout.
- **Architecture:** Same foundation as Gemini 3.8 Flash with cybersecurity post-training and more permissive cyber mitigations.

### Raw benchmarks found

Agent / tool use:

- Cybergym vulnerability discovery: **86.2% Pass@1** (above GPT-5.5-Cyber 85.6%, Mythos 5 83.8%, GPT-5.6 Sol 83.6%)
- Google private 20-language vulnerability set (1,200+ confirmed CVEs): **71.0%** recall (vs 3.7 Flash 58.9%, 3.5 Flash Cyber 46.6%)
- Wiz black-box pen-testing: 7.5–9.7% higher recall at 2.3–5.2x lower cost than frontier peers

Reasoning / knowledge:

- Not published for this variant; reasoning profile inherited from 3.8 Flash (54.9% HLE-Verified, GPQA ~94.4% on shared base).

Coding:

- CWE-Bench v0: **47.2% Pass@1** ($3.64 mean cost/rollout); Fable 5 holds 47.8% at $10.27, GPT-5.6 Sol 44.2% at $2.29, Opus 4.8 42.0%
- Chrome vulnerability patching: 2.6x more correct patches than much larger commercial models

Multimodal: not separately evaluated.

### Normalized scores (1–100)

- **Tool use: 80/100.** Cybergym 86.2% and 71% 20-language recall are frontier among publicly-named peers for autonomous vulnerability discovery; no GDPval-class general-agent score applies.
- **Reasoning: 82/100.** Inherits 3.8 Flash's 94.4% GPQA / 54.9% HLE-Verified base — scored from the shared checkpoint, not independent on this ID.
- **Context window: 92/100.** Identical 1M-token Flash-tier contract as 3.8 Flash; not separately disclosed for Cyber.
- **Multimodal: 94/100.** Shared 3.8 Flash modality surface (text/image/audio/video/PDF in).
- **Coding: 80/100.** CWE-Bench 47.2% ties the Fable 5 frontier at a fraction of cost; Cybergym 86.2% leads the named field.
- **Cost efficiency: 80/100.** Vendor characterizes the same Flash rate as the base model; CWE-Bench rollout cost $3.64 is favorable against peers.
- **Overall Score: 86/100.** Mean of the five quality dims. Note: access is gated to Fairwind defenders — broad deployment/production scoring should be treated with that procurement constraint. Rerun when the Cyber variant gets a public model card with independently-reproduced numbers.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch blog/model page, VentureBeat, Kingy benchmark explainer, Collinear/Artificial Analysis CWE-Bench table, DataCamp coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
