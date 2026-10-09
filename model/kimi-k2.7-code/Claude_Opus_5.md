# Kimi K2.7 Code — findings by Claude Opus 5

- Source: Moonshot AI (`moonshotai/Kimi-K2.7-Code`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused agentic model, built on **Kimi K2.6** and tuned for real-world long-horizon software engineering. Its distinguishing engineering claim is efficiency rather than raw capability: roughly **30% fewer thinking tokens than K2.6** at higher scores ([Kimi K2.7 Code model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code)). It shares the Kimi K2.5/K2.6 architecture exactly, so it is a *specialisation* of that line, not a new base — but it is a distinct checkpoint, not an alias. The `kimi-k2.7-code-highspeed` SKU is a separate serving tier with its own folder.
- **Provider / access:** OpenCode Zen ID `kimi-k2.7-code`, endpoint `https://opencode.ai/zen/v1/chat/completions` (**Chat Completions**, OpenAI-compatible) ([Zen docs](https://opencode.ai/docs/zen/)). Natively on `platform.moonshot.ai` with **both OpenAI- and Anthropic-compatible** APIs, plus open weights for self-hosting on vLLM, SGLang or KTransformers. Moonshot states it "works best with Kimi Code CLI" as its agent framework.
- **Release / knowledge:** **No explicit release date is published on the model card.** It postdates Kimi K2.6 (which it is built on), and the parent Hugging Face collection shows a last update of **Jul 27**; 113,780 downloads in the trailing month indicate an established release. Knowledge cutoff: no verified public date found. I am not going to invent a date for either.
- **IDs:** `opencode/kimi-k2.7-code` (Zen), `moonshotai/Kimi-K2.7-Code` (Hugging Face). **No Free ID on Zen** — it is paid there; the open weights are the free-as-in-licence route.
- **Context window:** **256,000 tokens** (model card: "Context Length 256K"; Moonshot's own benchmark methodology says tests ran at a 262,144-token context length — i.e. the window is genuinely exercised, not nominal). Corroborated by [BenchLM](https://benchlm.ai/models/kimi-k2-7-code). Max output: no verified public figure found.
- **Modalities:** **Text + image + video in → text out.** Hugging Face classifies it `image-text-to-text`, and the model card ships working examples for both `image_url` and `video_url` payloads — though it explicitly warns that **video chat is experimental and only supported on Moonshot's official API**, not on self-hosted vLLM/SGLang. Vision runs through a dedicated **MoonViT** encoder (400M parameters). Reasoning: **forced on** — `thinking` and `preserve_thinking` are both `True` and cannot be disabled, and Instant mode is unsupported; reasoning content is retained across multi-turn turns, which Moonshot credits for the coding-agent gains. Tool calls: yes, with interleaved thinking and multi-step tool calling inherited from K2 Thinking.
- **Pricing (as of 2026-10-08):** OpenCode Zen — **$0.95 / MTok input, $4.00 / MTok output, $0.19 / MTok cached read** ([Zen pricing](https://opencode.ai/docs/zen/)). Moonshot's own API pricing: no verified figure found. No free tier on either route.
- **Architecture:** Fully disclosed, which is rare — **Mixture-of-Experts, 1T total parameters, 32B activated**; 61 layers (1 dense); **384 experts, 8 selected per token, 1 shared expert**; 64 attention heads; attention hidden dimension 7168; MoE hidden dimension 2048 per expert; vocabulary 160K; **MLA** attention; SwiGLU activation; MoonViT vision encoder at 400M parameters. Ships with **native INT4 quantization** (same method as Kimi-K2-Thinking), published as BF16/F32/I32 safetensors. **Modified MIT License** for both code and weights.

### Raw benchmarks found

> Moonshot's vendor table is unusually honest: it reports GPT-5.5 and Claude Opus 4.8 **beating** K2.7 Code on 5 of 6 rows, and documents every harness (thinking mode via Kimi Code CLI, temperature 1.0, top-p 0.95, 262,144-token context; competitors run in Codex xhigh and Claude Code xhigh respectively; 3-run averages; explicit tool-call and token budgets). That transparency makes the vendor figures worth more than typical self-reporting — but they are still vendor-run, and the comparison harnesses differ by design.

Agent / tool use:

- τ²-bench: **90.1%** ([Artificial Analysis](https://artificialanalysis.ai/models/kimi-k2-7-code))
- **MCPMark-Verified: 81.1%** (model card; vs K2.6 72.8, GPT-5.5 92.9, Opus 4.8 76.4) — human-verified MCP tool use across Notion, GitHub, Filesystem, Postgres and Playwright, 100-step budget, 32k max tokens/step, 3-run average. It **beats Opus 4.8** here.
- **MCP-Atlas: 76.0%** (model card; vs K2.6 69.4, GPT-5.5 79.4, Opus 4.8 81.3) — official config, 100 tool-call budget, 3-run average
- Terminal-Bench 2.1: **67.0%** ([Vals AI](https://www.vals.ai/models/kimi_kimi-k2.7-code)) — independent, and a strong result on the hard harness
- Kimi Claw 24/7 Bench: **46.9%** (model card; vs K2.6 42.9, GPT-5.5 52.8, Opus 4.8 50.4) — in-house long-horizon multi-day coworking benchmark, 17 scenarios / 610 evaluation points via the OpenClaw harness, 3-run average. Independently listed at **46.9** with a **674** average time on [WildClawBench](https://huggingface.co/moonshotai/Kimi-K2.7-Code)'s evaluation-results panel
- GDPval-AA: **1114 Elo** / **27.0%** normalized (Artificial Analysis)
- AA Agentic Index: **22.5%** (Artificial Analysis) — the weakest agentic datapoint, and hard to reconcile with the MCP results
- OSWorld / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **89.6%** (Artificial Analysis) — the highest GPQA figure of any Moonshot model I measured
- AA-HLE: **35.0%** (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- CritPt: **10.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **25.8**; BenchLM overall **52.21/100, rank #84 of 887** (27 of 623 benchmarks, flagged conservative)
- AA-Omniscience: Index **−10.2**, Accuracy **39.6%**, **Hallucination Rate 82.4%** — the single worst number in this report
- AA-IFBench: **63.1%**
- MMLU-Pro, AIME, HMMT, FrontierMath: no verified public score found for this checkpoint

Coding:

- SWE-bench Verified: **78.2%** ([Vals AI](https://www.vals.ai/models/kimi_kimi-k2.7-code)) — independent, and the best SWE-bench figure in the Kimi line
- LiveCodeBench: **82.1%** (Vals AI)
- **Kimi Code Bench v2: 62.0%** (model card; vs K2.6 50.9, GPT-5.5 69.0, Opus 4.8 67.4) — in-house, 10+ languages, full production stack across backend, infra, performance, systems, security, frontend and ML/data engineering
- **Program Bench: 53.6%** (model card; vs K2.6 48.3, GPT-5.5 69.1, Opus 4.8 63.8) — 200 tasks reconstructing a program's behaviour from only a compiled binary plus docs, judged against 248,000+ fuzz-generated behavioural tests, no source/decompilation/internet
- **MLS-Bench Lite: 35.1%** (model card; vs K2.6 26.7, GPT-5.5 35.5, Opus 4.8 42.8) — 30-task subset on inventing generalizable ML methods, 5-hour agent budget
- CursorBench 3.2: **49.7%** ([Cursor evals](https://cursor.com/cursorbench))
- OpenHarmony Bench: **52.1%** ([official leaderboard](https://bench.matrix.openharmony.cn/))
- AA-SciCode: **47.8%**; AA Coding Index: **60.8%** (Artificial Analysis)
- Long-Horizon-Terminal-Bench ("Lhtb Solved"): listed on the model card's evaluation-results panel without an extractable value — recorded as present but unscored
- SWE-bench Pro / FrontierCode: no verified public score found

Multimodal:

- Design Arena — Website: **1270 Elo** ([OpenRouter](https://openrouter.ai/moonshotai/kimi-k2.7-code/benchmarks))
- **No MMMU, MathVision, CharXiv, Video-MME, OmniDocBench or OCR number exists for this checkpoint.** The vision/video pathway is architecturally documented (MoonViT 400M, working image and video APIs) and inherited from a measured family, but this specific code-tuned checkpoint has essentially no published vision measurement.

Long context:

- No MRCR / RULER / LongBench / needle-retrieval number published. **AA-LCR 79.3%** is the only quantified long-context signal — a good one — and Moonshot at least ran its own benchmark suite at the full 262,144-token setting, which is better practice than most.

### Normalized scores (1–100)

- **Tool use: 80/100.** The strongest tool-use evidence base of any model I have scored in this pass, and the only one where the numbers come from *human-verified, multi-server, budget-constrained* MCP harnesses: MCPMark-Verified 81.1% (beating Claude Opus 4.8's 76.4%) and MCP-Atlas 76.0%, both 3-run averaged with published tool-call budgets, plus τ²-bench 90.1% and an independent Terminal-Bench 2.1 of 67.0%. Capped below the mid-80s by Kimi Claw 24/7 at 46.9% — Moonshot's own long-horizon test, where GPT-5.5 and Opus 4.8 both beat it — and by an AA Agentic Index of 22.5% that flatly contradicts the MCP picture and which I will not explain away.
- **Reasoning: 73/100.** AA-GPQA Diamond 89.6% and AA-LCR 79.3% are genuinely strong independent results, and AA-HLE 35.0% is respectable for an open-weight model. Hard-capped by an **82.4% hallucination rate** against 39.6% accuracy on Omniscience — this model answers confidently when it does not know, more than almost anything else in the dataset — plus CritPt 10.0%, an AA Intelligence Index of 25.8, and no MMLU-Pro or competition-math coverage for this checkpoint at all.
- **Context window: 74/100.** 256K, vendor-stated and aggregator-confirmed, on an MLA-attention backbone, with AA-LCR 79.3% showing the window supports real reasoning rather than just fitting tokens — and Moonshot deserves credit for running its entire benchmark suite at 262,144 tokens instead of quietly testing at 32K. Held in the mid-70s because 256K is now mid-pack against the 1M–2M windows in this dataset, and because no retrieval curve exists at any depth.
- **Multimodal: 70/100.** Architecturally real and better-documented than most: a dedicated MoonViT encoder at 400M parameters, working image **and video** input, and `image-text-to-text` classification upstream. Scored at 70 rather than higher because the measurement is almost absent for *this* checkpoint — one Design Arena Elo and nothing else — and because video input is flagged experimental and **unavailable on self-hosted deployments**, which breaks the open-weight story precisely where it would matter most.
- **Coding: 79/100.** The dimension this model exists for, and it delivers: SWE-bench Verified 78.2% and LiveCodeBench 82.1% from an independent lab, plus a 30% reduction in thinking tokens versus K2.6 — a real efficiency gain on a reasoning model, not a benchmark artefact. Program Bench at 53.6% (rebuilding FFmpeg- and SQLite-scale programs from a binary alone, against 248k fuzz tests) is a brutal test it handles creditably. Capped below the 80s because Moonshot's own table shows GPT-5.5 and Opus 4.8 ahead on Kimi Code Bench v2, Program Bench and MLS-Bench Lite, and because CursorBench 3.2 at 49.7% and AA-SciCode 47.8% are mid-band.
- **Cost efficiency: 86/100.** $0.95 in / $4.00 out per MTok on Zen for a 1T-parameter model posting SWE-bench 78.2% is strong value, and three things compound it: the **Modified MIT** licence (unrestricted commercial self-hosting), **native INT4 quantization** that makes serving a 1T/32B-active model genuinely tractable, and the ~30% thinking-token reduction, which is a direct bill reduction on a forced-thinking model. Docked for no free tier anywhere, for output at $4.00 being 4.2× its input price on a model that cannot turn thinking off, and for 32B active parameters still implying real self-host hardware.
- **Overall Score: 75.2/100.** Mean of the five non-cost dims (80 + 73 + 74 + 70 + 79) / 5 = 75.2. Best fit: open-weight coding agents that live inside MCP tool environments — Notion/GitHub/Postgres/Playwright automation, binary-to-source reconstruction, long-session refactors — where the licence, the INT4 serving story and the token-efficiency all pay. Keep it away from anything requiring factual abstention (82.4% hallucination rate), and do not rely on its vision or video path in a self-hosted deployment.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Moonshot AI's `Kimi-K2.7-Code` Hugging Face model card (full architecture table, vendor benchmark table with documented harnesses and competitor comparisons, INT4 quantization, licence, image/video API examples and their platform restrictions, forced-thinking behaviour), the OpenCode Zen docs (ID, endpoint, pricing), BenchLM's aggregated page, and the underlying Artificial Analysis, Vals AI, Cursor, OpenHarmony Bench and OpenRouter leaderboards. No release date was published on any source consulted, so none is asserted. Vendor-run figures are labelled as such, and the AA Agentic Index / MCP contradiction and the 82.4% hallucination rate are reported rather than smoothed over. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
