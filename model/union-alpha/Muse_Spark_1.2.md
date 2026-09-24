# Union Alpha (Pareto 26.9) — findings by Muse Spark 1.2

- Source: Unbiased (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (Pareto 26.9)
- **Short description:** Unbiased blended model (2026-09-16 stealth) running several frontier/open models per request and keeping best answer; ties Astra/DeepSeek 4.1 Flash on DeepSWE at $2.50/$7.50.
- **Provider / access:** Unbiased API `unbiased/pareto` (stealth `stealth/union-alpha` on OpenRouter via OpenCode Zen `unbiased/pareto`) — Chat Completions, tool_choice support
- **Release / knowledge:** 2026-09-16 stealth, 2026-09-17 23:24 UTC revealed as Pareto 26.9; knowledge cutoff not disclosed
- **IDs:** `unbiased/pareto` (stealth `stealth/union-alpha`; no Free tier after 33h preview)
- **Context window:** 262,144 total (262K in / 131,072 out) — verified via OpenRouter listing and Unbiased model card / cellcog.ai
- **Modalities:** Text, image in; text out; reasoning yes (implicit blended selection, no exposed effort knob); tool calls yes; JSON mode yes (no schema enforcement)
- **Pricing (as of 2026-09-24):** $2.50 in / $7.50 out per 1M; cached $0.25 — Free 33h preview $0 (now paid; vs Fable 5 at 25% input / 15% output)
- **Architecture:** Proprietary blended synthesis (multiple frontier + open models per request, best-answer kept)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51%** (Unbiased vendor — vs Astra 58%, Fable 5.1 56%, DeepSeek 4.1 Flash 31%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (not on card)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench v2.1 launch chart: **~52% at ~$1.60/task** (OpenCode chart read, anticipated pricing — vs GLM-5.3-Flash 33% $0.30, Astra 55% $4 — not on AA pages)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (not on card)
- HLE no tools: **49%** (Unbiased vendor — vs Astra 54%, Fable 55%, DeepSeek 39%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (not on AA; 1 LiveBench result needs 5 for rank)
- MMMU-Pro: **78%** (Unbiased vendor — vs Astra 87%, Fable 81%, DeepSeek 77%)
- ArXivMath: **88%** (Unbiased vendor — vs Astra 91%, Fable 72%, DeepSeek 28%)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (launch chart claim outperforms Sol unverified)
- LiveCodeBench: **no verified public score found** (LiveBench composite Coding 82.2% #6 proxy from BenchLeader — not DeepSWE)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **74%** (Unbiased vendor — ties Astra 74 and DeepSeek 4.1 Flash 74, beats Fable 67; community chart ~73% at ~$0.65 vs Astra $6.50 consistent)
- LiveBench Agentic Coding: **54.7% #25** (BenchLeader, LiveBench proxy)

Long context:

- 262K total verified; no MRCR/RULER at max reported; tool-use focused not long-context

### Normalized scores (1–100)

- **Tool use: 78/100.** DeepSWE 74% tie with frontier + Terminal 4.0 51% vs 58% Astra, but no independent reproduction and no Tau3/Claw caps; vendor-only harness.
- **Reasoning: 75/100.** ArXivMath 88% near Astra 91% + HLE 49% + MMMU 78% but all vendor-reported, trailing Astra on 3/5 and missing AA Index/GPQA isolation caps.
- **Context window: 72/100.** 262,144 total (131K out) verified; tier ~72 for 256K but capped by no MRCR and blended model not optimized for 1M retrieval.
- **Multimodal: 65/100.** Text+image in → text out; MMMU 78% behind Astra 87%; image only, no video/audio/PDF, capped by no exposed reasoning control.
- **Coding: 82/100.** DeepSWE 74% frontier tie is strong but single vendor score; Terminal 4.0 51% trails Astra 58% and LiveBench Coding 82.2% proxy caps below 85.
- **Cost efficiency: 50/100.** $2.50/$7.50 paid (vs Free 100, vs $0.15–$0.50 Flash cheap); blended cost per completed task unpublished — may run multiple models per request.
- **Overall Score: 74/100.** Mean of five non-cost dims (78+75+72+65+82)/5=74.4 → 74; best-fit blended coding-mathematics specialist at moderate cost.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Unbiased model card Pareto 26.9 via capitalandcompute.net 2026-09-18, cellcog.ai 2026-09-16, OpenRouter listing, sioralabs, orcarouter.ai, BenchLeader LiveBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
