# Qwen 3.5 0.8B — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen Team (`opencode/qwen-3.5-0.8b`; AA `qwen3-5-0-8b`; HF `Qwen/Qwen3.5-0.8B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict — SCORED (real, distinct, independently-measured artifact — the floor of the Qwen3.5 small series).** **Qwen3.5-0.8B** is the **smallest dense member of Alibaba's Qwen3.5 small family** (0.8B / 2B / 4B / 9B, all released **2026-03-02**), a **native-multimodal** edge assistant: **~0.873–0.9 B parameters** (Artificial Analysis "Tiny ≤4B" class, 49 models), **text + image + video in → text out**, **262 K context** (≈81,920 max output per provider rows), **Apache 2.0 open weights on Hugging Face**, **reasoning variant profiled by AA** (a non-reasoning variant may also exist). AA **carries a page but Intelligence / Speed / Cost / Verbosity are ALL "N/A — No publicly available API"** (the open-weights / self-host tier — same as `gemma-4-e2b` b49), so **AA gives no independent quality index** and the quantitative base is a set of third-party trackers plus one **independent academic omni-modal evaluation**. Every measurement puts it at the **bottom of its own family** — the OmniEvaluator composite is **64.2 vs 79.8 (4B) / 79.9 (9B)**, non-thinking **MMLU-Pro 29.7 vs 55.3 (2B)**, an aggregator **AA Index ~6.1** and **coding 0.0**. The `meta` caveat is on target: **"thinking-mode loops at this size"** (the card warns the extended-thinking mode degrades at 0.8 B, so production use often drops to non-thinking). It is genuinely useful **as a free, tiny, runs-everywhere multimodal token** — but it is the weakest model in the queue, and its scores are kept strictly to **0.8B-specific** numbers.

## Model card

- **Vendor / artifact:** Alibaba Qwen Team; `Qwen/Qwen3.5-0.8B`, HF updated ~2026-03-09, part of the "Qwen3.5: Towards Native Multimodal Agents" family (blog 2026-02-15).
- **Class:** **dense ~0.873–0.9 B** (AA "Tiny ≤4B" open-weights class), **reasoning** (AA profiles the reasoning version; card notes thinking-mode loops at this size → non-thinking often used in production).
- **Modalities:** **native multimodal — text + image + video IN, text OUT** (a genuine VLM, per AA spec + Qwen confirmation "all of them are vision-language models") → Multimodal scored **above the 50 text-only floor**, but it is the **weakest-vision** member of the small series.
- **Context:** **262,144 native** (AA FAQ "260 K"), **≈81,920 max output** per provider rows.
- **License / weights:** **Apache 2.0, open weights** (HF) — free commercial self-host; **free hosted routes ($0.00/$0.00)**; no paid public API (hence AA "No publicly available API").

### Raw benchmarks found

> **Provenance.** **AA page exists but Intelligence Index / Speed / Cost / Verbosity all "N/A — No publicly available API"** (open-weights self-host). Independent quantitative base = **(1) arXiv 2609.01315 "OmniEvaluator" (independent academic omni-modal eval, v2, 2026-09-09)**; **(2) developer.puter** (aggregator citing AA); **(3) savrn.com** family benchmark table with a dedicated `Qwen3.5-0.8B` column; **(4) llm-stats.com**. Vendor specs from the HF card + qwen.ai blog. **Guard:** all bigger-sibling numbers (4B b21, 2B b51, 9B/27B/35B-A3B/397B family columns) are **NOT** credited to the 0.8B.

**Independent — arXiv 2609.01315 (OmniEvaluator composite, higher better):**
- **Qwen3.5-0.8B = 64.2**, against **Qwen3.5-4B 79.8 / Qwen3.5-9B 79.9** and proprietary anchors **GPT-5.5 90.2 / Claude-Opus-4.8 90.4 / Gemini-3.1-Pro 89.8** — a **~15-point drop** from its own 4B sibling, cleanly placing the 0.8B at the floor of the family.

**Independent — aggregators (AA-derived, low-signal but directional):**
- **developer.puter:** "scores **6.1 on the Artificial Analysis Intelligence Index, outperforming 15% of tracked models**. On **coding, it scores 0.0** (outperforms 0% of models)." *(the reasoning-variant AA page I fetched shows Index N/A, so 6.1 is a launch-era / non-reasoning cell — treated as a weak directional signal, not a hard index).*
- **savrn.com** family table, **`Qwen3.5-0.8B` column, Non-Thinking mode:** **MMLU-Pro 29.7** (vs Qwen3.5-2B 55.3, Qwen3-1.7B 40.2, Qwen3-4B-2507 69.6) — the **lowest** general-knowledge score in the small series.
- **llm-stats.com** comparison snippet: **MMLU-Pro 42.3%** (vs Qwen3-VL-32B-Thinking 82.1%) — a **thinking-mode** reading (29.7 non-thinking → 42.3 thinking bracket the truth).

**Structural (AA spec, confirmed):** Reasoning **Yes** · Input **text + image + video** · Output **text** · Context **262 K** · Total params **0.9 B (0.873 B)** · License **Apache 2.0** · Weights **Hugging Face (self-hostable)** · Released **March 2, 2026**.

**Not published for the 0.8B (so not credited):** no SWE-bench / LiveCodeBench / Terminal-Bench / GPQA / AIME / HLE under the 0.8B id; the OCRBench / MMMU / VideoMME standouts in the family table belong to the **2B (b51)** and **4B (b21)**, not to this 0.8B.

### Normalized scores (1–100)

- **Tool use: 28/100.** No function-calling or agentic benchmark exists for the 0.8B; aggregator coding/agentic signal is **0.0**, and a sub-1B model cannot reliably plan or drive multi-step tools. Only trivial single-shot assistive calls.
- **Reasoning: 33/100.** AA profiles it as a reasoning model, but **thinking-mode loops at this size** (card caveat), and its deliberative ceiling is low: **OmniEval composite 64.2** (family floor), **MMLU-Pro 29.7 non-thinking / 42.3 thinking**, **AA Index ~6.1 (15th pct)**. Real reasoning behavior, weak reasoning quality.
- **Context window: 58/100.** **262 K native** is genuinely large for the corpus and matches its siblings; tempered because a 0.8 B model's *effective* long-context recall degrades well before the nominal window.
- **Multimodal: 58/100.** **Genuine VLM** — text + image + video in → text out (above the 50 text-only floor), but the **weakest vision** of the small series (the OCRBench 85.4 / VideoMME strengths are the 2B/4B's, not this model's).
- **Coding: 22/100.** Aggregator **coding 0.0**, no SWE / LiveCodeBench under the 0.8B id; a sub-1B dense model is not a code generator. Near-floor, small credit for syntax-adjacent classification only.
- **Cost efficiency: 90/100.** Scored but **NOT counted** in the Overall mean. **Free Apache 2.0 weights**, **$0.00/$0.00 free hosted routes**, runs on the smallest edge hardware in the family — genuinely elite cost profile (its headline selling point).
- **Overall Score: 40/100.**

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**AA `artificialanalysis.ai/models/qwen3-5-0-8b`** page fetched — confirms Reasoning Yes / text+image+video in / text out / **262 K** / **0.9 B (0.873 B)** / Apache 2.0 / open weights / released **2026-03-02**, but **Intelligence Index · Speed · Cost · Verbosity ALL "N/A — No publicly available API"**; **arXiv 2609.01315 "OmniEvaluator"** fetched — independent composite **Qwen3.5-0.8B 64.2** vs 4B 79.8 / 9B 79.9 / GPT-5.5 90.2; **developer.puter** aggregator — AA Index **6.1** (beats 15%), coding **0.0**; **savrn.com** family table — dedicated `Qwen3.5-0.8B` **Non-Thinking MMLU-Pro 29.7** (vs 2B 55.3); **llm-stats.com** — thinking-mode **MMLU-Pro 42.3**; **`meta`** — dense 0.8B multimodal, 262 K, Apache 2.0, free routes, **"thinking-mode loops at this size"** caveat.)
- Future sources: becomes materially more scoreable if **AA opens a measured API cell** (Intelligence Index / Speed / Cost) for the 0.8B, or if an **OCRBench / MMMU / VideoMME / LiveCodeBench number is published specifically for the 0.8B** (rather than only its bigger siblings). **Guards applied:** (1) do **NOT** cross-credit the **4B** (b21: MMMU 77.6 / VideoMME 83.5 / LiveCodeBench 55.8) or **2B** (b51: OCRBench 85.4 / VlmsAreBlind 75.8) or **9B / 27B / 35B-A3B / 397B** family-column numbers onto this 0.8B — the shared table belongs to larger siblings; the ollama-family **MMLU-Pro 87.4/89.5/89.8** row is **not** the 0.8B; (2) the **"AA Index 6.1 / coding 0.0"** is an aggregator's launch-era/non-reasoning cell (the reasoning AA page shows Index N/A) — directional, low confidence; (3) **Cost efficiency 90 is NOT counted** in the Overall mean; (4) Multimodal sits **above the 50 text-only floor** because image+video input is genuinely supported, but stays modest as the weakest-vision member; (5) **no numbers invented** — every figure is 0.8B-specific from arXiv 2609.01315, developer.puter, savrn, llm-stats, or the AA spec card.
