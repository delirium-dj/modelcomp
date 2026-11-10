# Gemini 3.8 Flash — findings by GPT-6.1 Astra

- Source: Google DeepMind / `gemini-3.8-flash`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Gemini 3.7 Flash successor for software engineering and professional agents; distinct from the dedicated Cyber variant [1].
- **Provider / access:** Gemini API `generateContent`, AI Studio and Gemini products [1][2].
- **Release / knowledge:** 2026-09-02; March 2026 cutoff, with some domains limited to January 2025 [1].
- **IDs:** `google/gemini-3.8-flash`; no Zen Free ID verified.
- **Context window:** 1,048,576 input / 65,536 output tokens [2].
- **Modalities:** Text/image/video/audio/PDF input, text output; thinking and tools [2].
- **Pricing (as of 2026-11-10):** Google free API tier uses data to improve products; paid tier does not. Paid $0.75/$3.75 input/output per million through December 31, then $1.50/$7.50. Cache $0.075 plus $0.50/M-token-hour during promotion; grounding separately billed and unavailable on free tier [3].
- **Architecture:** Proprietary derivative of Gemini 3.7 Flash; parameter counts unverified [1].

### Raw benchmarks found

Official September evaluation [1]:

Agent / tool use:
- Terminal-Bench **2.1: 89.4%**, but **4.0: 19.1%**; these are different test generations.
- GDPval-AA **v2: 1545 Elo**; Vals Finance Agent v2 **61.4%**; OSWorld-2.0 **59.0% partial**, batch tool enabled.
- Tau2/Tau3 and Claw-Eval: no verified public score found here.

Reasoning / knowledge:
- HLE-Verified **54.9%**; LABBench2 **86.2%**. HLE-Verified is not the original full HLE set.
- GPQA, CritPt and Omniscience: no verified public score found here.

Coding:
- DeepSWE **v1.1: 73.7%** [1]. SWE-bench Verified, LiveCodeBench and SciCode: no verified public score found here.

Long context:
- No verified full-window retrieval score found; capacity from [2].
- Visual evidence: CharXiv Reasoning **86.2% no tools**, LVBench **87.8% agentic**, GDP.PDF **35.0% all-pass** [1].

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong TB2.1 and finance results; TB4.0 and partial computer-use performance materially limit the rating.
- **Reasoning: 93/100.** HLE-Verified and LABBench support strong reasoning; suite differences prevent a direct full-HLE comparison.
- **Context window: 95/100.** Verified million-token capacity, without retrieval-ceiling evidence.
- **Multimodal: 95/100.** Broad audio/video/document input and measured perception; text-only output caps it.
- **Coding: 94/100.** DeepSWE and TB2.1 are strong, tempered by newer terminal tasks.
- **Cost efficiency: 100/100.** Evaluates the documented $0 tier; data-use, quotas and unavailable grounding constrain its applicability.
- **Overall Score: 93/100.** (88 + 93 + 95 + 95 + 94) / 5 = 93; suited to economical multimodal agents.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public search and official documents; independent normalized judgments. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — Model card and evaluations](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [2 — API limits](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
  - [3 — Pricing and data-use terms](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.8-flash)
