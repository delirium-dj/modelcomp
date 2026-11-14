# Agnes 3.0 Qwen — findings by Flint

- Source: Agnes AI (Agnes-3.0-Qwen)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Qwen
- **Short description:** Open-weight multimodal reasoning model from Agnes AI — a post-trained derivative of Qwen/Qwen3.8-Flash-Next (hybrid-attention Mixture-of-Experts, ~180B total params / 10 active experts, multi-token-prediction head) positioned by Agnes AI as its most capable reasoning model for agentic coding, tool use, scientific problem solving, long-context analysis and multimodal understanding. Agnes self-reported the strongest agentic result in its comparison set on τ³-Banking (48.0) and the top-2 agentic coding result (Terminal-Bench 2.1: 87.8) while being a far smaller model than the flagship systems it is compared against.
- **Provider / access:** Open-weight (BF16 checkpoint, ~360 GB; distributed under the Qwen Community License 1.0); served by Agnes AI via OpenAI-compatible API at `https://apihub.agnes-ai.com/v1` (Chat Completions + Responses, `AGNES_API_KEY`); local serving via SGLang (`--model-path Agnes-AI/agnes-3.0-qwen`, `--tp 8`, `--context-length 1024000`, `--tool-call-parser qwen3_coder`, `--reasoning-parser qwen3`). No OpenCode Zen (`opencode/<id>`) route identified in this pass.
- **Release / knowledge:** Introduced October 2026 (Hugging Face card snapshot 2026-10-10, GitHub revision 2026-10-12). Knowledge cutoff of the post-trained derivative not stated publicly in the fetched sources; inherited upstream Qwen/Qwen3.8-Flash-Next cutoff unverified.
- **IDs:** `Agnes-AI/Agnes-3.0-Qwen` (Hugging Face repository); `agnes-3.0-qwen` (Agnes API model id); base model `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** 1,048,576 tokens (1M) total; 65,536 max output tokens.
- **Modalities:** Text, image and video inputs; text output; extended reasoning with selectable effort (`xhigh` default, `medium`, `low`); tool calling yes; streaming yes.

### Raw benchmarks found

- Agentic Work & Coding:
  - GDP.pdf: **16.0** (self-reported; agnes-3.0-qwen vs GPT-5.6 Sol (Max) 27.2, Gemini 3.8 Flash 21.0, DeepSeek V4 Flash (Max) 12.8, MiniMax M3 9.8, Claude Opus 4.8 (Max) 22.8, Qwen3.8 Max (0902) 22.8) — self-reported by Agnes AI, HF model card + GitHub README.
  - τ³-Banking: **48.0** (self-reported; best in the comparison set) — HF model card + GitHub README.
  - Terminal-Bench 2.1: **87.8** (self-reported; GPT-5.6 Sol (Max) 88.0, Gemini 3.8 Flash 87.6, DeepSeek V4 Flash (Max) 78.7, MiniMax M3 65.2, Claude Opus 4.8 (Max) 84.6, Qwen3.8 Max 88.8) — HF model card + GitHub README.
  - Terminal-Bench 4.0: **26.1** (self-reported) — HF model card.
  - SciCode: **56.1** (self-reported) — HF model card.
- Reasoning / knowledge:
  - GPQA Diamond: **91.1** (self-reported) — HF model card.
  - MMLU-Pro: **86.2** (self-reported) — HF model card.
  - IFBench: **79.6** (self-reported; outperformed GPT-5.6 Sol (Max) and Claude Opus 4.8 (Max)) — HF model card.
- Tool use: dedicated standalone tool-use harness rows were not published in the fetched sources; only the agentic/tooling-adjacent rows above exist.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ³-Banking 48.0 sits at the top of the comparison set and Terminal-Bench 2.1 87.8 is within ~1 point of the best compared model; no standalone OSWorld/AutomationBench/Claw-Eval rows were found — rated from the agentic rows that were.
- **Reasoning: 86/100.** GPQA Diamond 91.1 and MMLU-Pro 86.2 with IFBench 79.6 self-reported; frontier-adjacent on the knowledge/reasoning axis.
- **Context window: 95/100.** Verified 1,048,576-token context with 65,536 max output; ≥1M tier.
- **Multimodal: 80/100.** Text, image and video inputs with text output (image+video tier; no audio input, no non-text output).
- **Coding: 89/100.** Terminal-Bench 2.1 87.8 (frontier reference ~85%+) and SciCode 56.1 (frontier reference ~55%+) self-reported; agentic coding focus advertised.
- **Cost efficiency: 60/100.** Open-weight distribution under Qwen Community License 1.0; hosted API list price for `agnes-3.0-qwen` not published in the fetched pricing page; self-host compute cost excluded from this 1–100 scale.

- **Overall Score: 86/100.** Mean of the five quality dims (Tool 80 + Reasoning 86 + Context 95 + Multimodal 80 + Coding 89) / 5 = 86.0 (Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (flint)** — 2026-11-14
- Method: public web research; web search unavailable (HTTP 402), fallback ladder rung 3 — direct fetch over HTTP (`curl`) of the authoritative Hugging Face model card (`huggingface.co/Agnes-AI/Agnes-3.0-Qwen`) and the GitHub release README (`github.com/AgnesAI-Labs/Agnes-3.0-Qwen`, raw README). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes-3.0-Qwen — Hugging Face model card, weights and files](https://huggingface.co/Agnes-AI/Agnes-3.0-Qwen)
  - [Agnes-3.0-Qwen — GitHub release / landing page](https://github.com/AgnesAI-Labs/Agnes-3.0-Qwen)
  - [Agnes AI — documentation pricing page](https://wiki.agnes-ai.com/en/docs/pricing)
