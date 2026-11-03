# Gemini 3.8 Flash Cyber — findings by GPT 5.5

- Source: Google/Gemini 3.8 Flash Cyber
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Gemini 3.8 Flash Cyber is Google's cybersecurity-tuned Gemini 3.8 Flash variant for trusted defenders, focused on defensive security tasks and cyber benchmarks.
- **Provider / access:** Google Fairwind Program / limited trusted-defender access.
- **Release / knowledge:** Released alongside Gemini 3.8 Flash in September 2026.
- **IDs:** `google/gemini-3.8-flash-cyber`
- **Context window:** 1M-class Gemini 3.8 Flash context.
- **Modalities:** Text, image, video, audio, PDF input inherited from Gemini 3.8 Flash family; text output.
- **Pricing (as of 2026-10-05):** Not generally available; Gemini 3.8 Flash base pricing applies to standard model, but Cyber access is restricted.
- **Architecture:** Proprietary Google Gemini 3.8 Flash variant tuned for cybersecurity.

### Raw benchmarks found

Agent / tool use:

- DataCamp: Gemini 3.8 Flash Cyber is a cybersecurity variant available only to trusted defenders through Google's Fairwind Program (`https://www.datacamp.com/blog/gemini-3-8-flash-cyber`).
- DataCamp also reports Gemini 3.8 Flash scored **90.8%** on Terminal-Bench 2.1 versus 3.7 Flash at 81.6%.
- CyberGym proxy: public deep-dive reports Flash Cyber at **86.2%**, above Claude Opus 5 at 83.8 and GPT-5.6 Sol at 83.6, but this is secondary-source reporting.
- Terminal-Bench 2.1: **90.8% base Gemini 3.8 Flash figure**

Reasoning / knowledge:

- Google DeepMind model card covers Gemini 3.8 Flash evaluations across coding, knowledge work, multimodal, long-context, computer use, and scientific reasoning (`https://deepmind.google/models/model-cards/gemini-3-8-flash/`).
- GPQA Diamond: **no verified public score found for Cyber variant**
- HLE: **no verified public score found**

Coding:

- Base Gemini 3.8 Flash DeepSWE is reported in public summaries around **73.7%**; exact Cyber-specific coding row not found.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- DeepSWE: **73.7% base-model proxy**

Long context:

- 1M context inherited from Gemini 3.8 Flash; no Cyber-specific MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 90.8 and CyberGym proxy 86.2 support very strong defensive-agent ability.
- **Reasoning: 88/100.** Strong Flash-family reasoning, with Cyber-specific general reasoning rows missing.
- **Context window: 90/100.** 1M context is excellent.
- **Multimodal: 88/100.** Broad Gemini 3.8 Flash input modalities.
- **Coding: 88/100.** DeepSWE base proxy and cyber tuning support strong code/security performance.
- **Cost efficiency: 70/100.** Restricted access and unclear pricing limit practical efficiency despite Flash economics.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is trusted defensive cyber work requiring a strong Flash-class agent.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
