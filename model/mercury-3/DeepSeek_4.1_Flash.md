# Mercury 3 — findings by DeepSeek 4.1 Flash

- Source: Inception/Mercury 3 (`inception/mercury-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception's third-generation diffusion language model (dLLM) — the flagship of its real-time portfolio, decoding a whole block of tokens in parallel by denoising instead of one token at a time. Built for latency-sensitive agentic work (browser agents, voice/chat support, real-time tutoring, search); text-only and proprietary.
- **Provider / access:** Inception API Platform (`mercury-3`, OpenAI-compatible Chat Completions), also served via OpenRouter (`inception/mercury-3`), Baseten, and Vercel. No confirmed OpenCode Zen route — the folder's scaffolded `opencode/mercury-3` id does not appear in the current Zen catalog.
- **Release / knowledge:** Released 2026-10-19. Knowledge cutoff not disclosed.
- **IDs:** `mercury-3` (Inception API); `inception/mercury-3` (OpenRouter).
- **Context window:** 1,000,000 total; 131,072 max output. Verified via Inception's launch post and the OpenRouter listing (max output per Vals AI / llm-stats listings).
- **Modalities:** text in; text out. Reasoning (`reasoning_effort`), tool calls (`tools`), and structured outputs (`response_format`) are exposed on the OpenRouter route. No image/audio input.
- **Pricing (as of 2026-11-04):** launch promo $0.10 / $0.35 per 1M in/out (50% off the $0.20 / $0.70 list); cached input 90% off (~$0.01–0.02); 100M free tokens for new API keys. Launch-discount end date not announced.
- **Architecture:** proprietary diffusion LLM (block-parallel denoising); more than 40x the total parameters of Mercury 1 (no parameter count published); 1,068 tokens/s on NVIDIA GPUs (vendor measure, ~4x Claude Haiku 5.5 and ~8x GPT-6 Luna in Inception's own table).

### Raw benchmarks found

Agent / tool use:

- GDPval (Elo) (**vendor**): **1,237.2** (Inception launch table, medium settings; GPT-6 Luna 1,204.0 / Claude Haiku 5.5 1,225.0)
- Tau3-Banking: **30.24%** (Inception table; Luna 23.00 / Haiku 13.06)
- IFBench (instruction following): **76.84%** (Inception table; widest vendor win, +15.0 over Luna)
- BrowseComp+: **55.18%** (Inception table)
- DeepSearchQA: **71.33%** (Inception table)
- MultiChallenge: **60.35%** (Inception table)
- Mind2Web web-agent (TinyFish partner report on Inception's page): **50% of 50 live navigation tasks completed** — "significantly more than GPT-6.1-Sol"; partner testimony, not an independent run
- Terminal-Bench 4.0: **3.03% ±0.00** (#51/59 on Vals AI) — independent harness; the standout weak agentic-terminal result
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (Inception table; Luna 86.36 / Haiku 84.51)
- AA-Omniscience-Public (accuracy): **46.44%** (Inception table; Luna 46.94, Haiku 37.22 — one of the two AA rows Luna wins)
- AA-LCR v1.1: **77.67%** (Inception table; Luna 78.30)
- HLE / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (AA has no Mercury 3 page as of 2026-11-04); BenchLM overall: not computed (unranked, 9 rows covered)
- Vals Index (independent): **43.66% ±1.23** (#28/32); Vals Finance Index **47.22%** (#31/35); Vals Legal Index **62.96%** (#27/33)

Coding:

- SWE-Bench Atlas: **51.08%** (Inception table; ~18 points over Luna 33.33 / Haiku 32.26)
- DeepSWE v1: **46.31%** (Inception table; Haiku wins this longer coding test at 51.62)
- Vibe Code Bench v1.1: **60.93% ±5.38** (#58/123 on Vals AI — the model's best independent rank)
- Code Migration v1.1: **39.26% ±3.17** (#21/29 on Vals AI)
- Terminal-Bench 4.0: **3.03%** (#51/59 on Vals AI)
- HLAB-Vals-1.1: **5.00% ±1.61** (#26/33 on Vals AI)
- Design Arena (Website, Elo): **1,230** (OpenRouter-linked row via BenchLM)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- MRCR v2: **75.50%** (Inception table; Haiku 78.40 wins, Luna 62.72)
- AA-LCR v1.1: **77.67%** at the 1M-capable window (Inception table)

### Normalized scores (1–100)

- **Tool use: 60/100.** Vendor agentic table is genuinely strong (GDPval 1,237 Elo above both rivals, Tau3-Banking 30.24, BrowseComp+ 55.18, DeepSearchQA 71.33), but the independent Terminal-Bench 4.0 collapse (3.03%) and mid-pack Vals positional indexes cap this well below frontier-agentile baselines.
- **Reasoning: 65/100.** GPQA Diamond 89.23 is the strongest single number (above both medium-mode rivals) and AA-Omniscience 46.44 is near-parity with Luna, but Vals Index 43.66% (#28/32) shows the generalist reasoning profile is mid-pack.
- **Context window: 95/100.** 1M-token window (up from 260K on Mercury 2.5) with 131K max output; MRCR v2 75.5 / AA-LCR 77.67 show usable, not class-leading, long-context retrieval.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input.
- **Coding: 55/100.** SWE-Bench Atlas 51.08 (vendor) and Vibe Code Bench 60.93% (#58/123) are respectable for the speed tier, but DeepSWE 46.31 loses to Haiku 5.5 and the terminal/agentic harness results (3.03%, HLAB 5.00%) drag it down.
- **Cost efficiency: 90/100.** Launch $0.10/$0.35 per 1M (list $0.20/$0.70) plus a 90% cache discount and 100M free trial tokens make it one of the cheapest capable routes, with Vals measuring ~$0.478 per Vals-Index test; it is not free and the 50% discount has no stated end date.
- **Overall Score: 58/100.** (60 + 65 + 95 + 15 + 55) / 5 = 58.0. Best-fit recommendation: high-volume, latency-sensitive text agent loops — browser/search steps, support, tutoring — where its speed and price win; avoid for terminal-agent workloads and multimodal work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: public internet research (Inception launch post and models page, OpenRouter listing, Vals AI model page, BenchLM, llm-stats, The Decoder, CellCog breakdown, MindStudio hands-on); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Diffusion at Scale: Introducing Mercury 3 — Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Inception — Models & pricing](https://www.inceptionlabs.ai/models)
  - [OpenRouter — inception/mercury-3](https://openrouter.ai/inception/mercury-3)
  - [Vals AI — Mercury 3 benchmarks, cost and capabilities](https://www.vals.ai/models/inception_mercury-3)
  - [BenchLM — Mercury 3 benchmark scores](https://benchlm.ai/models/mercury-3)
  - [The Decoder — Inception's Mercury 3 diffusion model claims](https://the-decoder.com/inceptions-mercury-3-diffusion-model-claims-to-beat-gpt-6-luna-and-claude-haiku-5-5-at-a-fraction-of-the-wait)
  - [LLM-Stats — Mercury 3 benchmarks, pricing & context window](https://llm-stats.com/models/mercury-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
