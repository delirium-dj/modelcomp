# Gemini 3.8 Flash — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: Google DeepMind (`google/gemini-3.8-flash`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's September 2026 Flash-tier long-horizon coding-agent model, further trained on top of Gemini 3.7 Flash on a 1M-token sparse Mixture-of-Experts; the workhorse for long-horizon software engineering and agent loops.
- **Provider / access:** Google Gemini API (`google/gemini-3.8-flash`), Google AI Studio (free tier), Google Vertex AI.
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 (1M) in / 65,536 (64K) out
- **Modalities:** text, image, video, audio, pdf in; text, tool-calls out
- **Pricing (as of 2026-09-20):** Introductory $0.75 in / $3.75 out per 1M tokens through end-2026 (thinking/cached output billed as output); cached input $0.075/M (90% off); Batch and Flex APIs 50% off; free on Google AI Studio / unpaid API quota (content may improve Google products). Standard rates double to $1.50/$7.50 in January 2027.
- **Architecture:** Sparse Mixture-of-Experts; parameters not disclosed; further-trained from Gemini 3.7 Flash (architecture details deferred to the 3.7 Flash card).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (HokAI, Sep 4 2026; ahead of GPT-5.6 Terra 87.4% and Claude Sonnet 5 80.4% in the same third-party comparison)
- DeepSWE v1.1: **≥70%** (success rate on long-horizon coding tasks, Google-reported, Sep 2026)
- SWE-bench Pro: **61.6%** (DataCamp independent test, Sep 2026; up from 60.4%)
- SWE-Atlas: **51.9%** (DataCamp, Sep 2026; up from 48.0%)
- tau3-bench Banking: **38.1%** (DataCamp, Sep 2026; up from 30.9%)
- CharXiv (multimodal reasoning): **86.2%** (DataCamp, Sep 2026; up from 84.5%)
- Val's Finance Agent v2: **61.4%** (Google-reported)
- Terminal-Bench v4.0 / GDPval-AA / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE-Verified: **54.9%** (Google-reported, Sep 2026)
- GPQA Diamond: no verified public score found
- AA Intelligence Index: **59** (Artificial Analysis, cited HokAI, Sep 4 2026)
- BenchLM overall: **75.9/100, rank #6 of 230** (BenchLM.ai, Sep 2026)
- LCR / MLCR / CritPt / AA-Omniscience / AA-LCR: no verified public score found

Coding:

- DeepSWE v1.1 (long-horizon coding): **≥70%** (Google-reported)
- SWE-bench Verified: no verified public score found (HokAI lists -- / 28)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GDM-MRCR: no verified public score found for 3.8 (2025-09)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 90.8% leads GPT-5.6 Terra (87.4%) and Claude Sonnet 5 (80.4%), with DeepSWE ≥70%; capped by missing GDPval-AA/Tau3-Bench disclosures.
- **Reasoning: 82/100.** AA Intelligence Index 59 and HLE-Verified 54.9% place it above median; GPQA Diamond not disclosed.
- **Context window: 90/100.** 1M-token input window (top tier) but only a 64K-token output ceiling.
- **Multimodal: 92/100.** Accepts text, image, video, audio and PDF input; the strongest modality mix of the Flash tier.
- **Coding: 88/100.** DeepSWE ≥70%, Terminal-Bench 2.1 90.8%; capped by no disclosed SWE-bench Verified.
- **Cost efficiency: 95/100.** Free on Google AI Studio / unpaid quota, with a cheap paid intro ($0.75/$3.75/M).
- **Overall Score: 88/100.** Mean of the five quality dimensions; best-in-class agentic Terminal-Bench at free-tier access.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Google DeepMind model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
