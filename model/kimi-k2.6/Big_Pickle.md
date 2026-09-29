# Kimi K2.6 — findings by Big Pickle

- Source: Moonshot AI/Kimi K2.6 (`kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight, natively multimodal agentic model for long-horizon execution — advertised for 12-hour runs of 4,000+ coordinated tool calls and swarms of up to 300 parallel sub-agents. Not an alias: it superseded the `kimi-k2-0905-preview` / `kimi-k2-turbo-preview` / `kimi-k2-thinking` line while remaining a selectable K2-series model below the K3 flagship. Successor Kimi K2.7 Code is a separate coding-focused ID.
- **Provider / access:** Moonshot Open Platform `kimi-k2.6` (OpenAI-compatible Chat Completions); also `moonshotai/kimi-k2.6` on OpenRouter and Vercel AI Gateway (routed across Moonshot, Fireworks, Novita AI, Baseten), `@cf/moonshotai/kimi-k2.6` on Cloudflare Workers AI, and NVIDIA NIM. OpenCode Zen ID `opencode/kimi-k2.6`; no Zen Free ID found.
- **Release / knowledge:** 2026-04-20 (GA eight days after the Code Preview was confirmed); knowledge cutoff not publicly stated.
- **IDs:** `kimi-k2.6` (Moonshot API); `moonshotai/kimi-k2.6` (OpenRouter / AI Gateway); `moonshotai/Kimi-K2.6` (Hugging Face weights).
- **Context window:** 262,144 tokens (256K) native, verified from the Kimi API platform pricing docs and NVIDIA NIM (ISL 256K). Max output 235,929 tokens (OpenRouter/Kilo listing). Note: this folder's `meta.json` still lists 128K total / text-only — that is stale against the vendor specs; flagged for the orchestrator, not edited here.
- **Modalities:** text, image and video in; text out; reasoning toggleable (thinking can be enabled or disabled; preserved thinking optional); tool calls yes with JSON-schema tool definitions and native agent-swarm orchestration; JSON mode via structured outputs.
- **Pricing (as of 2026-09-29):** $0.95 input / $4.00 output per 1M; cache hit $0.16 (≈83% discount); OpenRouter route $0.80 / $3.40. Blended 7:2:1 cache/input/output ≈ $0.70 per 1M. Prices exclude applicable taxes. Paid, no free tier.
- **Architecture:** open weights, Modified MIT License. Mixture-of-Experts, 1T total parameters / 32B active, 384 experts with 8 activated per token, 61 layers, 2048 experts in the NIM spec, 64 attention heads, 160K vocab, MLA attention, SwiGLU, MuonClip-stabilized training, plus a 400M-parameter MoonViT vision encoder; native INT4 quantization release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (vendor + NVIDIA NIM + BenchLM). Terminal-Bench 2.1 (Vals harness): **53.6%**. Independent Kilo Code eval: 54.4% on Terminal-Bench 2.0 at $24.84 per attempt.
- BrowseComp (Pass@1): **83.2%**; BrowseComp Agent Swarm: **86.3%**.
- OSWorld-Verified: **73.1%**. OSWorld 2.0: 4.6%.
- Toolathlon: **50.0%**. MCP Atlas: **55.9%**.
- Claw-Eval: **62.3%** (BenchLM) — one of the few public Claw-Eval numbers in the dataset.
- τ²-bench: **95.9%** (different harness from τ³-Banking; not directly comparable).
- GDPval-AA: **1115 Elo** (normalized 26.3%). APEX-Agents-AA 28.5%. AA Agentic Index 22.1%.
- Long-horizon claims: 4,000+ tool calls over 12+ hours, 300 parallel sub-agents × 4,000 steps; partner deltas vs K2.5 — CodeBuddy +12% code-gen accuracy / +18% long-context stability, Vercel >50% on an internal Next.js benchmark, Factory.ai +15% (partner-reported, no public harness).
- τ3-Banking: **no verified public score found.**

Reasoning / knowledge:

- GPQA Diamond (Pass@1): **90.5%** (NVIDIA NIM model card; BenchLM AA-GPQA Diamond 91.1%, Vals harness 89.1%). MMLU-Pro 87.6%.
- HLE: **34.7%** with tools (NVIDIA); HLE-Full w/ tools 54.0% (vendor); AA-HLE 37.5%.
- AA-LCR (long-context reasoning): **81.0%**.
- CritPt: **8.0%** — a clear weakness relative to peers in the same band.
- Artificial Analysis Intelligence Index: **45** on the AA release page and comparison tables (v4.1.1 index); the AA model page shows 36 (estimated) and BenchLM shows 27.0 — the index was re-baselined across AA versions, so all three are listed rather than averaged.
- AA-Omniscience Accuracy / Hallucination Rate: **32.6% / 40.5%** (Index 5.3) — factual recall is weak.
- AIME 2026: **96.4%**. HMMT Feb 2026: **92.7%**. IMO-AnswerBench 86.0%. FrontierMath v2 Tiers 1–3 38.97%, Tier 4 14.58%.
- Epoch Capabilities Index: **151**, rank 36/230.

Coding:

- SWE-bench Verified: **80.2%**.
- SWE-bench Pro: **58.6%** (vendor: the "honest ceiling" replacing the 76.8% K2.5 Verified figure).
- SWE-bench Multilingual: **76.7%**.
- LiveCodeBench v6 (Pass@1): **89.6%** (Vals harness 86.8%).
- SciCode: **52.2%**; AA-SciCode **51.5%**.
- Vibe Code Bench: **37.89%**. cursorBench 3.1: 47.6%.
- AA Coding Index: **61.8%**.
- DeepSWE: **no verified public score found.**

Long context:

- 262,144-token window with automatic context compression and native 12-hour session support. AA-LCR **81.0%** is the only published long-context retrieval number; no MRCR, RULER or GraphWalks result exists.

Vision:

- MMMU-Pro **79.4%** (80.1% with Python), CharXiv **80.4%** (86.7% with Python), MathVision **87.4%** (93.2% with Python), V* 96.9%, Design Arena Website 1277 Elo.

### Normalized scores (1–100)

- **Tool use: 70/100.** GDPval-AA 1115 Elo and Terminal-Bench 2.1 at 53.6% land squarely in the mid 50–70 band, and Claw-Eval 62.3% plus Toolathlon 50.0% confirm real but not frontier tool reliability. Strong BrowseComp 83.2% and OSWorld-Verified 73.1% keep it at the top of that band; the weak APEX-Agents-AA 28.5% and AA Agentic Index 22.1% cap it.
- **Reasoning: 84/100.** GPQA Diamond 90.5% clears the 90%+ frontier marker and AIME 2026 96.4% confirms genuine mathematical depth, with AA-LCR 81.0% for long-context reasoning. Held well below 90 by HLE at only 34.7–37.5% (under the 40% frontier line), an Intelligence Index of 45 (under the 60+ line), AA-Omniscience factual accuracy of just 32.6%, and CritPt 8.0%.
- **Context window: 78/100.** Verified 262,144 tokens with 235,929 max output places it in the 200K–500K tier, above the 70 anchor at 200K; automatic context compression and the 12-hour session claim support the upper half. Capped there because 256K is a quarter of the ≥1M tier and only LCR 81.0% is published.
- **Multimodal: 86/100.** Native text + image + video input with a MoonViT vision encoder puts it in the "+video/PDF in" 75–90 band, and the vision numbers back the upper half: MMMU-Pro 79.4%, CharXiv 80.4%, MathVision 87.4%, V* 96.9%. No audio input or non-text output keeps it out of the 90+ tier.
- **Coding: 82/100.** LiveCodeBench v6 89.6% and SWE-bench Verified 80.2% are strong, SciCode 52.2% nearly reaches the 55% frontier marker, and Vibe Code Bench at 37.89% is far above the sub-10% that would force the mid band. Capped by SWE-bench Pro at 58.6% and an AA Coding Index of 61.8% (under the 70+ frontier line).
- **Cost efficiency: 88/100.** Paid at $0.95 / $4.00 with an 83% cache-hit discount to $0.16, which is a genuinely cheap price point for a 1T-parameter open-weights agentic model; Artificial Analysis measures ~$0.31–0.39 per Intelligence Index task on ~35k output tokens. Held just under the ~90 mark by the raw output rate and by 46 tok/s being at the slow end.
- **Overall Score: 80/100.** (70 + 84 + 78 + 86 + 82) / 5 = 80. Best fit: best-value open-weights pick for native multimodal long-horizon agentic work and video/image-driven frontend generation at ~$0.31 per agent task — pair it with K3 for 1M-context or deeper judgment jobs, and expect slow streaming plus weak factual recall.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-29
- Method: public internet research (Moonshot/Kimi forum announcement, NVIDIA NIM model card with the full vendor eval table, Artificial Analysis model and release pages, BenchLM model page, Vercel AI Gateway and Cloudflare Workers AI listings, partner-reported deltas). Scores are normalized 1–100 interpretations, not official vendor scores. Where the three aggregators disagree (Intelligence Index 27 / 36 / 45; Terminal-Bench-Science-style harness spread) every value is listed rather than averaged.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_Kimi_K2.6.md`, using the same headings.
