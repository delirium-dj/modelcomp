# Mistral Small 4 — findings by Big Pickle

- Source: Mistral AI/Mistral Small 4
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4 (Reasoning)
- **Short description:** Mistral AI's 119B-parameter sparse MoE (6.5B active) small-tier reasoning model, released under Apache 2.0 for self-hosting and hosted on La Plateforme. It is the efficiency tier of the Mistral 4 generation: image input, tool calls, and a 256K window at commodity pricing.
- **Provider / access:** Mistral AI La Plateforme (`mistral-small-4`), plus open weights on Hugging Face (`mistralai/Mistral-Small-4-119B-2603`, Apache 2.0); proxied on OpenRouter and other hosts.
- **Release / knowledge:** Released 2026-03-16; knowledge cutoff not published by Artificial Analysis.
- **IDs:** `mistralai/mistral-small-4`; no Zen Free ID.
- **Context window:** 256,000 total (Artificial Analysis + models.dev); max output not independently confirmed.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-11):** $0.15 / $0.60 per 1M in/out; cached input $0.015. Self-hosting the Apache-2.0 weights is $0.
- **Architecture:** 119B total / 6.5B active sparse mixture-of-experts; Apache 2.0.

### Raw benchmarks found

All rows are Artificial Analysis harness results for the Reasoning configuration.

Agent / tool use:

- Terminal-Bench 2.1: **21.0%**
- Terminal-Bench Hard: **17.4%**
- Terminal-Bench 4.0: **0%**
- Tau2-Bench: **41.2%**
- Tau-Banking: **4.9%**
- GDPval-AA: **369.68 Elo**
- AutomationBench: **0.96%**
- AA Briefcase: reported, no standalone figure captured
- OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- AA Intelligence Index: **4.30** (very low — the harness's task-level weighting punishes the weak agentic and long-context rows)
- GPQA Diamond: **76.9%**
- HLE: **9.9%**; HLE-Diamond: **4.4%**
- CritPt: **0.29%**; CritPt agentic-hard: **0%**
- LCR: **49.7%**
- IFBench: **48.2%**
- AA-Omniscience: accuracy **21.4%**, hallucination rate **66.6%**
- MLCR: **1.7%**
- GDP-PDF all-pass: **0%**
- AIME 2025 / LiveCodeBench: not reported.

Coding:

- SciCode: **38.8%**
- FrontierCode 2.0: **0%**
- SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench: no verified public score found.

Multimodal:

- MMMU-Pro: **56.8%**

Long context:

- LCR **49.7%** on a 256K window — roughly half of the retrieval tasks survive, so the window is real but not high-fidelity at length.

### Normalized scores (1–100)

- **Tool use: 43/100.** Tau2 41.2% and GDPval 369.68 are mid-tier agentic signals, but TB 2.1 21.0%, TB 4.0 0% and AutomationBench 0.96% show the tool loop breaks down on long-horizon tasks.
- **Reasoning: 52/100.** GPQA 76.9% is genuinely strong for a 6.5B-active model, but HLE 9.9%, CritPt 0.29%, MLCR 1.7% and a 66.6% hallucination rate put the depth well below the mid band.
- **Context window: 72/100.** 256K total lands just above the 200K = 70 anchor in the 200K–500K band.
- **Multimodal: 62/100.** Image input verified (MMMU-Pro 56.8%); no audio, video or PDF input.
- **Coding: 45/100.** SciCode 38.8% and FrontierCode 2.0 0% — competitive for autocomplete-style work, not for repo-level engineering.
- **Cost efficiency: 90/100.** $0.15/$0.60 per 1M with $0.015 cache reads is excellent, and the Apache-2.0 weights allow free self-hosting; only the output rate keeps it below the 97–99 band.
- **Overall Score: 55/100.** (43 + 52 + 72 + 62 + 45) / 5 = 54.8 → 55. Best fit: cheap high-volume extraction, classification, image+text triage and private on-prem deployments where a 256K window matters more than frontier accuracy.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Artificial Analysis model page and API data, Mistral AI model/weights listing on Hugging Face, Apache 2.0 license record); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Small 4](https://artificialanalysis.ai/models/mistral-small-4)
  - [Hugging Face — mistralai/Mistral-Small-4-119B-2603](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
  - [Mistral AI — models and pricing](https://mistral.ai/pricing)
- Future sources: add a new file next to this one, e.g. `Mistral_Small_4_Update.md`, using the same headings.
