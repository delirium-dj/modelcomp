# Kimi K2.7 Code — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI / Kimi K2.7 Code (`moonshotai/Kimi-K2.7-Code`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code. No "Free" wording — open weights but no Zen Free ID.
- **Short description:** Moonshot AI's coding-focused agentic model built on Kimi K2.6, tuned for long-horizon software engineering with ~30% fewer thinking tokens than K2.6. Open weights, always-thinking, and natively multimodal (MoonViT encoder).
- **Provider / access:** open weights `moonshotai/Kimi-K2.7-Code` (Modified MIT) on Hugging Face / ModelScope; first-party Kimi API plus ~14 OpenRouter providers (CoreWeave, Baseten, Fireworks, SiliconFlow, NovitaAI, …). OpenAI-compatible Chat Completions; `preserve_thinking` is forced on and cannot be disabled.
- **Release / knowledge:** released June 2026 (Inferbase: 2026-06-11; BenchLeader: 2026-06-12); product page refreshed 2026-09-14. Training cutoff not available.
- **IDs:** `moonshotai/Kimi-K2.7-Code` / `kimi-k2.7-code` (Kimi API unit row). No Zen Free ID.
- **Context window:** 262,144 tokens (256K) per the model card, with a 16,384-token max output (Inferbase). K2.7's own evals ran at 262,144 tokens.
- **Modalities:** text, image and video in; text out; thinking always on with interleaved thinking plus multi-step tool calls (model card).
- **Pricing (as of 2026-09-25):** Kimi API $0.19 cache-hit / $0.95 cache-miss input and $4.00 output per 1M (Kimi docs); ~$1.71/M blended (BenchLeader); OpenRouter providers $0.656–$1.90 in / $3.00–$8.00 out. Kimi Code subscriptions $15–$159/month. Self-hosting needs ~4× B300-class GPUs (Inferbase).
- **Architecture:** MoE, 1T total parameters / 32B activated, 384 experts (8 selected + 1 shared), 61 layers, MLA attention, 400M-param MoonViT vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.4%** (BenchLeader, Artificial Analysis run; rank 77); Terminal-Bench Hard: **44.7%** (BenchLeader)
- Tau2-Bench: **63.1%** (Inferbase aggregate row); Tau2-Banking: **60.8** (Inferbase) — harness/label mapping in the aggregator is ambiguous, treat as provisional
- MCP Atlas: **76.0%** (vendor model card); MCP Mark Verified: **81.1%** (vendor model card)
- Kimi Claw 24/7 Bench: **46.9%** (vendor, in-house agentic suite); APEX-Agents: **37.6%**; LiveBench Agentic Coding: **45.7%** (BenchLeader)
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.9%** (BenchLeader, Epoch AI; rank 53) / **89.6%** (BenchLeader, Artificial Analysis; rank 70)
- HLE: **35.0%** (BenchLeader, Artificial Analysis; rank 96); SimpleBench: **57.9%**; CritPt: **10.0%**; Chess Puzzles: **21.0%**
- Artificial Analysis Intelligence Index: **25.8** (BenchLeader; rank 132); Epoch Capabilities Index: **150.0** (#47); LiveBench overall: **68.4%**
- SimpleQA Verified: **36.5%**; AA-Omniscience: **-10.2** index (accuracy 39.6%, non-hallucination 17.6% — rank 283)
- IFBench: **63.1%**; LiveBench Language: **77.9%**
- LCR / MLCR: AA-LCR **79.3%** (rank 79) under long context

Coding:

- Kimi Code Bench v2: **62.0** (vendor in-house; K2.6 50.9, GPT-5.5 69.0, Claude Opus 4.8 67.4)
- Program Bench: **53.6** (vendor; vs GPT-5.5 69.1); MLS Bench Lite: **35.1** (vs Opus 4.8 42.8); ProgramBench (Vals): **0.0%**
- SWE-bench (Vals AI): **78.2%** (rank 30); SWE-bench Verified (official harness): no verified public score found
- LiveCodeBench: **82.0%** (Vals); SciCode: **47.5%** (SciCode) / **47.8%** (Artificial Analysis)
- DeepSWE: **30.5%**; Vibe Code Bench v1.1: **47.2%**; WeirdML: **54.1%**; FrontierCode: **30.1%**; Code Migration: **25.4%**; Surface Evolver Bench: **48.8%**; ALE-Bench: **886.2**; LiveBench Coding: **74.0%**
- LMArena WebDev: **1472 Elo**

Long context:

- AA-LCR: **79.3%** (Artificial Analysis; rank 79 of 409) — strongest BenchLeader category score (66/100 vs 50 baseline).

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 67.4% is above the 45–60% mid band and MCP Atlas 76.0% / MCP Mark Verified 81.1% / Kimi Claw 46.9% show genuine multi-step tool competence; Tau3-Banking and GDPval-AA were not published, so the frontier anchors cannot be checked.
- **Reasoning: 78/100.** GPQA Diamond 87.9–89.6% sits just under the 90% frontier anchor, with HLE 35.0% close to 40% and AA-Omniscience -10.2 dragging factual reliability down (25.8 Intelligence Index).
- **Context window: 76/100.** 262K lands in the upper 200K–500K tier, and AA-LCR 79.3% is the model's best category — good, not frontier retrieval.
- **Multimodal: 75/100.** Native image and video input with a 400M MoonViT encoder is the 75–90 band's floor; no published VLM benchmark scores (MMMU/MMMU-Pro) keeps it there rather than higher.
- **Coding: 79/100.** SWE-bench (Vals) 78.2% and LiveCodeBench 82.0% are strong, but SciCode 47.5–47.8% (<55), DeepSWE 30.5% (<74) and Vibe Code Bench 47.2% hold it below the frontier coding band.
- **Cost efficiency: 84/100.** $0.95 in / $4.00 out with $0.19 cached reads sits above the $3/$15 anchor (60) but at/below the $0.95-$1.25 input classes; the ~$1.71 blended rate and 1T-parameter self-hosting cost keep it out of the high 80s+.
- **Overall Score: 76/100.** (72 + 78 + 76 + 75 + 79) / 5 = 76.0 → 76. Best fit: repository-scale agentic coding with a 256K window and open weights — long-horizon coding strength, mid-tier factuality and multimodal breadth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (Kimi product page, Hugging Face model card, BenchLeader, Inferbase); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
