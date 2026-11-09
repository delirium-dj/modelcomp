# MiniMax M3.1 Flash Preview — findings by GPT 5.6 Luna

- Source: MiniMax/M3.1 Flash Preview
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview coding/agent model with tunable thinking depth and long-context positioning. It is kept distinct from the subsequently released `MiniMax-M3.1-Flash` checkpoint.
- **Provider / access:** MiniMax M Plan and MiniMax Code; the preview source describes subscription access rather than a stable public per-token API route.
- **Release / knowledge:** Preview announced 2026-09-27; knowledge cutoff not verified. MiniMax's 2026-10-19 M3.1 Flash launch is a related non-preview release, not silently substituted here.
- **IDs:** `MiniMax-M3.1-Flash-Preview` / `minimax/minimax-m3.1-flash-preview`.
- **Context window:** Up to 1,000,000 tokens is reported for the preview positioning; no exact-preview retrieval measurement was found.
- **Modalities:** The preview description calls it multimodal and coding/agentic; exact preview endpoint input/output coverage was not independently verified.
- **Pricing (as of 2026-11-02):** Subscription access with no verified exact-preview input/output price; the released M3.1 Flash's $0.15/$0.60 prices are not transferred.
- **Architecture:** Exact preview architecture and parameter count were not verified. The released M3.1 Flash's 428B/23B-active MoE specification is deliberately excluded.

### Raw benchmarks found

- Exact `MiniMax-M3.1-Flash-Preview`: **no verified public standardized benchmark score found**; the available preview report explicitly notes the absence of a benchmark table.
- Related non-preview `MiniMax-M3.1-Flash` release numbers, **not used as exact-preview scores**: BankerToolBench **76.2**, DeepSWE v1.1 **73.7%**, Terminal Bench 4.0 **38.1**, OSWorld 2.0 **61.7**, Agents' Last Exam **29.6**, and CyberGym **82.2**. The released model used named harnesses including OpenCode 1.17.18, Codex 0.149.1, and mini-SWE-agent 2.4.5/512K; those distinctions are retained rather than applied to Preview.

### Normalized scores (1–100)
- **Tool use: 74/100.** Preview access and agent positioning support a provisional score, but no exact tool benchmark is public.
- **Reasoning: 72/100.** Tunable thinking depth supports a family-level estimate; released M3.1 Flash scores are not substituted.
- **Context window: 90/100.** The reported 1M ceiling is top-tier, but no exact-preview retrieval result verifies performance at that length.
- **Multimodal: 70/100.** The preview is described as multimodal, while the exact endpoint contract remains unverified.
- **Coding: 75/100.** Its stated purpose is agentic coding, but exact-preview SWE/terminal evidence is absent.
- **Cost efficiency: 85/100.** Subscription access and Flash positioning suggest good value, but no exact-preview token price permits a firmer score.
- **Overall Score: 76/100.** `(74 + 72 + 90 + 70 + 75) / 5 = 76.2`, half-up to **76**; best fit is exploratory long-context coding through the preview subscription, not a benchmarked production API.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh research with the preview ID, the released M3.1 Flash ID, and their benchmark harnesses kept separate; related release figures are labelled and not used to claim exact-preview performance. Scores are provisional normalized interpretations.
- Reference URLs:
  - [MiniMax M3.1 Flash research announcement](https://www.minimax.io/blog/minimax-m31f?full=1)
  - [MiniMax model list and retirement/access documentation](https://platform.minimax.io/docs/faq/models.md)
  - [MiniMax M3.1 Flash released model card](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
