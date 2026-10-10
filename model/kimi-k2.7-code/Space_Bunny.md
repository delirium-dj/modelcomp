# Kimi K2.7 Code — findings by Space Bunny

- Source: Moonshot AI / Kimi K2.7 Code
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change in both directions.** Independent harnesses have now filled the two gaps the prior pass explicitly flagged as missing: **SWE-bench 78.2%** and **LiveCodeBench 82.1%** (Vals AI) and **Terminal-Bench 2.1 67.0%** — the first result in this batch that closes an open "no verified public score found" line. The official card also **confirms video input** and documents a **~30% thinking-token reduction vs Kimi K2.6**. Offsetting these, Artificial Analysis has published **Omniscience Hallucination Rate at 82.4%** with a **negative Omniscience Index of −10.2%** — the worst reliability profile measured anywhere in this batch. Net: **Tool 86 → 88**, **Reasoning 82 → 74 (down)**, **Context 76 → 78**, **Multimodal 65 → 78 (up)**, **Coding 89 → 91**, **Cost 79 → 83**, Overall **79.6 → 81.8**.

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused multimodal MoE model for end-to-end programming, long-horizon agentic decomposition, and multi-turn tool use. A **fine-tune of Kimi K2.6** — same architecture, retrained for agentic coding with roughly 30% fewer thinking tokens per task.
- **Provider / access:** Hugging Face `moonshotai/Kimi-K2.7-Code`; Moonshot's own platform `https://platform.moonshot.ai` (OpenAI- **and** Anthropic-compatible); OpenRouter `moonshotai/kimi-k2.7-code`; Kimi Code CLI (`https://www.kimi.com/code`) is the vendor-recommended agent framework. Self-hosting supported on **vLLM, SGLang, KTransformers**; same deployment method as K2.5/K2.6.
- **Release / knowledge:** **2026-06-12** (OpenRouter dated slug). No verified exact knowledge cutoff published on the official card.
- **IDs:** `moonshotai/Kimi-K2.7-Code`; `moonshotai/kimi-k2.7-code` (OpenRouter).
- **Context window:** **256K tokens — which is exactly 262,144.** The official card's spec table states "Context Length 256K"; the benchmark footnote states tests ran at a **262,144-token** context. These are the same number in two notations, not a discrepancy — BenchLM's "256K" agrees. No separate max-output figure published.
- **Modalities:** **Image and video input** (video chat is explicitly "an experimental feature and is only supported in our official API for now"); text output. **Thinking is forced on** — `preserve_thinking` is True and "can't be disabled", and **instant mode is not supported**. Tool calling, interleaved thinking with multi-step tool calls, and structured outputs supported.
- **Pricing (verified 2026-10-10):** OpenRouter **$0.6562 input / $0.18 cached input / $3.30 output** per 1M — unchanged from the prior pass. Artificial Analysis reports a Kimi-API median of ~$0.95/$4.00.
- **Architecture:** Open-weight MoE under a **Modified MIT licence** (code and weights). **1T total / 32B active**; 61 layers (1 dense), 384 experts with **8 selected per token** plus 1 shared, MLA attention, SwiGLU, vocab 160K, **MoonViT 400M vision encoder**. **Native INT4 quantization** supported, inherited from Kimi K2 Thinking.

### Raw benchmarks found

**Official Moonshot card** (thinking mode via Kimi Code CLI, temperature 1.0, top-p 0.95, 262,144-token context; GPT-5.5 in Codex xhigh, Opus 4.8 in Claude Code xhigh):

| Benchmark | Kimi K2.6 | **Kimi K2.7 Code** | GPT-5.5 | Opus 4.8 |
|---|---|---|---|---|
| Kimi Code Bench v2 | 50.9 | **62.0** | 69.0 | 67.4 |
| Program Bench | 48.3 | **53.6** | 69.1 | 63.8 |
| MLS-Bench Lite | 26.7 | **35.1** | 35.5 | 42.8 |
| Kimi Claw 24/7 Bench | 42.9 | **46.9** | 52.8 | 50.4 |
| MCP Atlas | 69.4 | **76.0** | 79.4 | 81.3 |
| MCP Mark Verified | 72.8 | **81.1** | 92.9 | 76.4 |

Moonshot publishes the comparison columns itself. The model **beats K2.6 on every metric** — the specialization worked — but **trails both GPT-5.5 and Opus 4.8 on every coding metric**, and on MCP Mark Verified it loses to GPT-5.5 by 11.8 points. That is vendor-published and should be read as-is.

**Independent — new since the prior pass:**

- **SWE-bench: 78.2%** (Vals AI leaderboard) — *resolves the prior pass's "no exact public SWE-bench Verified or SWE-bench Pro score found"*
- **LiveCodeBench: 82.1%** (Vals AI)
- **Terminal-Bench 2.1: 67.0%** (Vals AI) — *supersedes the prior pass's Terminal-Bench Hard 44.7%; note this is a different, easier harness*
- **CursorBench 3.2: 49.7%** (Cursor official evals)
- **OpenHarmony Bench: 52.1%** (OpenHarmony official leaderboard)
- **Design Arena Website: 1270 Elo** (OpenRouter)
- **GDPval-AA: 27.0% / Elo 1114**; **AA Agentic Index: 22.5** (both revised slightly upward from 26.3% / 21.0 in the prior pass)
- **AA-Omniscience Index: −10.2%**; **Omniscience Accuracy: 39.6%**; **Hallucination Rate: 82.4%** — **new, and the most consequential data point in this report**
- **Long-Horizon Terminal Bench: 3 tasks solved** (IntelligenceLab LHTB, HF eval result)
- WildClawBench Avg Time: **674** (HF eval metadata, same suite as Kimi Claw 24/7)

**Carried from the prior pass (unchanged, still accurate):**

- MCP-Atlas **76.0%**, MCP-Mark Verified **81.1%** (100 tool-call/100-step budgets, 32k max tokens per step, averaged over 3 runs)
- Kimi Claw 24/7 Bench **46.9%** (610 evaluation points across 17 scenarios, OpenClaw harness, 3 runs)
- GPQA Diamond **89.6%**, HLE **35.0%**, AA-LCR **79.3%**, CritPt **10.0%**, AA-Intelligence Index **25.8**
- IFBench **63.1%**, Artificial Analysis Tau2-Bench Telecom **90.1%**
- SciCode **47.8%**, AA Coding Index **60.8**
- BenchLM overall **52.39/100**, rank **#87 of 889** (conservative — 27 of 625 benchmarks covered)

Sources consulted: [Moonshot AI Kimi-K2.7-Code model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code), [BenchLM Kimi K2.7 Code (updated 2026-10-10)](https://benchlm.ai/models/kimi-k2-7-code), [Vals AI Kimi K2.7 Code](https://www.vals.ai/models/kimi_kimi-k2.7-code), [Artificial Analysis Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code), [CursorBench](https://cursor.com/cursorbench), [OpenHarmony Bench leaderboard](https://bench.matrix.openharmony.cn/), and [Long-Horizon Terminal Bench](https://zli12321.github.io/LHTB/leaderboard.html), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 88/100.** Up from 86. **Terminal-Bench 2.1 at 67.0%** is the addition that matters — it replaces the prior pass's Terminal-Bench **Hard 44.7%** with a current-harness result roughly 22 points higher, and it is a third-party measurement rather than a vendor one. **MCP-Mark Verified 81.1%**, **MCP-Atlas 76.0%**, and **τ²-bench Telecom 90.1%** remain strong. Held below 90 because **Kimi Claw 24/7 is only 46.9%** — Moonshot's own long-horizon benchmark, on their own OpenClaw harness, and the model still loses to GPT-5.5 (52.8) and Opus 4.8 (50.4) there. **GDPval-AA 27.0%** and **AA Agentic Index 22.5** confirm that long-horizon professional work is the weak axis.
- **Reasoning: 74/100.** **Reduced from 82 — the largest single reduction in this report.** The reasoning *ceiling* is genuinely high: **GPQA Diamond 89.6%**, **HLE 35.0%**, **AA-LCR 79.3%** are all strong, and CritPt 10.0% is only mediocre. What the new Artificial Analysis Omniscience data changes is the *floor*: **Hallucination Rate 82.4%**, **Omniscience Accuracy 39.6%**, and an **Omniscience Index of −10.2%** — negative. The model answers roughly four questions in five incorrectly *and* presents the wrong answer confidently. A model that is right on hard multi-step reasoning but fabricates on the majority of ordinary factual questions is a poor default even at GPQA 89.6%, because the failure mode is invisible to the user at generation time. Note the tension with CritPt 10.0% — both are low, and both point the same direction. **No published knowledge cutoff** also remains an open gap.
- **Context window: 78/100.** Up from 76. **256K (262,144) native** is confirmed twice in the official material, and **AA-LCR at 79.3% is an actual long-context retrieval measurement at that window** — the prior pass credited this but rated conservatively. Still below the 500K-plus top tier, and there is still **no MRCR, RULER, or GraphWalks result** to corroborate AA-LCR.
- **Multimodal: 78/100.** **Raised from 65 — the largest increase here.** Two independent reasons. First, a **correction of the prior pass's own hedge:** the prior report noted video placeholders in the chat template but declined to credit video because the provider spec only verified text/image. The official card now states plainly that "**K2.7-Code supports Image and Video input**," with a working video example. Second, a **new measurement**: **Design Arena Website at 1270 Elo** is the highest Design Arena score observed across this batch — a real signal on multimodal output quality, backed by a **400M-parameter MoonViT vision encoder**. Held below 85 because there is still **no dedicated visual-reasoning benchmark** (no MMMU, MMBench, or DocVQA figure exists for this model), and video support is experimental and official-API-only.
- **Coding: 91/100.** Up from 89. This is now the best-evidenced dimension for the model. **SWE-bench 78.2%** and **LiveCodeBench 82.1%** are the two results the prior pass was missing, both from Vals AI. Alongside **Terminal-Bench 2.1 67.0%**, **Kimi Code Bench v2 62.0**, **Program Bench 53.6**, **SciCode 47.8%**, **CursorBench 3.2 49.7%**, **AA Coding Index 60.8**, and **OpenHarmony 52.1%**, the coding evidence is now broad across five independent harnesses plus three vendor ones. The cap is Moonshot's own table: **the model is behind GPT-5.5 and Opus 4.8 on every coding benchmark Moonshot chose to publish**, including by 15.5 points on Program Bench. **No SWE-bench Pro, Vibe Code Bench, or DeepSWE figure exists.**
- **Cost efficiency: 83/100.** Up from 79. Hosted pricing is unchanged at **$0.6562 / $3.30** (OpenRouter), which is already inexpensive for frontier-adjacent coding. Two real improvements: **~30% fewer thinking tokens than Kimi K2.6** for equivalent work — a direct, measurable cut to per-task cost that applies on every route, and **native INT4 quantization**, which makes self-hosting a 1T-parameter model materially cheaper. Held below 90 because **1T total parameters remains genuinely expensive to self-host**, and the model is priced well above free tiers like DeepSeek V4.1 Flash or GLM 5.3 Flash.
- **Overall Score: 81.8/100.** (88 + 74 + 78 + 78 + 91) / 5 = 409 / 5 = 81.8, up from 79.6. The prior pass flagged its two thinnest dimensions — coding evidence and multimodal — and both have since filled in with independent data, which is why the score rose despite the Reasoning reduction. **Best fit: long-horizon software-engineering agents on a budget, where you can tolerate a high hallucination rate because the code is compiled and tested rather than trusted.** The specific fit is an agentic loop with tool access: MCP and Terminal-Bench results are genuinely top-tier, and image input lets the agent read screenshots and diagrams. **Two caveats to carry.** First, **82.4% hallucination rate** — do not use this model for anything where an unverified factual assertion matters, and keep retrieval in the loop. Second, Moonshot's own numbers show **Kimi K3** is the current flagship; if you are not pinned to K2.7 Code's specific weights, K3 is the better buy on the vendor's evidence.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Moonshot AI's official Hugging Face model card (including its own GPT-5.5 and Opus 4.8 comparison table), BenchLM, Vals AI, Artificial Analysis, Cursor evals, the OpenHarmony Bench leaderboard, and Long-Horizon Terminal Bench; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — three corrections to the prior pass: **(1) context notation.** The prior report's "262,144 tokens" and BenchLM's "256K" are the same value; this is now stated once, correctly. **(2) video input.** The prior report declined to credit video because only the chat template supported it; the official card now confirms video on the official API, and Multimodal is raised accordingly. **(3) Terminal-Bench.** Terminal-Bench **Hard 44.7%** and Terminal-Bench **2.1 67.0%** are different harnesses and are not comparable — the 2.1 figure is the one carried forward, and the substitution is stated rather than silently applied. **The AA-Omniscience block (Hallucination Rate 82.4%, Index −10.2%) is newly published and is the sole driver of the Reasoning reduction from 82 to 74.** Moonshot's vendor comparison columns are reported against the model's own interest, not omitted. Search-provider rate limiting (HTTP 429) persisted, so evidence came from two direct primary retrievals (official model card, BenchLM) plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code_Recheck.md`, using the same headings.