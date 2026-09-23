# Hunyuan Hy3 — findings by Laguna S 2.1

> Source: tencent/hy3 (Tencent), e.g. LLMPodium, Artificial Intelligence, Tencent Cloud API docs, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Hunyuan Hy3 (Tencent). Latest-generation Hunyuan model (ranked #386 overall on LLMPodium).
- Short description: Tencent's latest Hunyuan generation — an open-weights MoE reasoning/coding model priced very aggressively at $0.14/$0.56 per 1M tokens.
- Provider / access: Tencent Cloud Hunyuan API / `tencent/hy3` (TokenHub preview ~$0.18/$0.59 per `meta.json`); OpenCode Zen `opencode/hy3`. Chat Completions-compatible; 2 provider routes on LLMPodium.
- Release: July 5, 2026 (LLMPodium).
- Architecture: MoE (params not disclosed), hybrid linear/flash attention "Delta Attention" lineage (Hunyuan). Repo `meta.json` = Apache 2.0 open-weights/self-host; LLMPodium lists "Proprietary / Parameters Not disclosed" (reconciled below).
- Context window: 262,000 total tokens (repo `meta.json` "256K"; LLMPodium "262,000") — **below the 1M tier**, but ≥64K caveat cleared. Max output: not verified (assumed 64K-class).
- Modalities: text + image input → text output (+image-in only; no video/audio/PDF verified) (repo `meta.json`).
- Knowledge cutoff: not stated on LLMPodium or Tencent API page.
- Reasoning / tools: reasoning yes; tool/function calls yes; JSON/structured outputs supported.
- Pricing (as of 2026-09-23): Tencent direct **$0.14 / $0.56** per 1M in/out (LLMPodium); repo `meta.json` TokenHub preview ~$0.18/$0.59 (aligned). **noFreeId** — no per-token free/Zen Free ID (repo `meta.json`). Cost/Index task ~$1.04 (LLMPodium Value 99.9). Speed ~69 output tok/s, TTFT 2.76s.
- IDs: `tencent/hy3` / OpenCode Zen `opencode/hy3`; aliases not specified.

### Raw benchmarks found

> Verified public numbers (LLMPodium Hunyuan Hy3, 2026-06 benchmark window; AA Intelligence Index). Benchmarks not located are NOT fabricated.

Agent / tool use:
- AA Intelligence Index v4.3.2: **41.0** (#52/212; median 25; "well above average") (LLMPodium citing AA)
- SWE-bench Verified: **78%** (LLMPodium, Tencent)
- LiveCodeBench: **66.7%**; SWE-bench Pro: **57.9%; MCP Atlas: 79.1%; BrowseComp: 84.2%; Humanity's Last Exam: 31.6%; Apex Agents: 25.6%; Toolathlon: 48.5%** (LLMPodium)
- Terminal-Bench 2.0/2.1/Hard / GDPval-AA Elo / Tau3-Banking / Claw-Eval / OSWorld: NOT FOUND as standalone figures on this page

Reasoning / knowledge:
- GPQA Diamond: **90.4%** (LLMPodium); AA Intelligence Index 41.0 (#52) (above)
- HLE / MMLU / MRCR / LCR / AA-Omniscience / CritPt: NOT FOUND

Coding:
- SWE-bench Verified 78% / SWE-Pro 57.9% / LiveCodeBench 66.7% / MCP Atlas 79.1% (above); DeepSWE / SciCode: NOT FOUND standalone

Long context: 262K window verified; no MRCR/RULER/GraphWalks retrieval % found.
Multimodal proxy: LLMPodium does not list multimodal among Hy3's category strengths → consistent with image-in only (not a numeric score).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Anchored on AA Intelligence Index v4.3.2 = 41.0 (#52), same-scale-consistent with my other Sept-2026 findings (Fable Index 26→67; GPT-5.4 Index 39→69; Muse 1.1 Index 34→77 legacy/~67 current).

- **Tool use: 70/100.** Index 41 + SWE-Verified 78% + LiveCodeBench 66.7% + MCP Atlas 79.1%; capped by no standalone GDPval-AA/Tau3/TB2.1 % and Apex Agents 25.6%.
- **Reasoning: 72/100.** Index 41 + GPQA Diamond 90.4% (frontier 90%+ floor); no HLE/MMLU/CritPt to lift further.
- **Context window: 75/100.** 262,000 native tokens (≥64K caveat cleared) **but below the 1M tier**; no retrieval-percentage figure → off the 85+ retrieval tier.
- **Multimodal: 70/100.** Text + image in, text out (+image-in only; no video/audio/PDF verified).
- **Coding: 76/100.** SWE-Verified 78% + SWE-Pro 57.9% + LiveCodeBench 66.7% + MCP Atlas 79.1%; capped by no DeepSWE/SciCode / Apex Agents low.
- **Cost efficiency: 82/100.** $0.14/$0.56 per 1M (~$0.24/MTok blended, ~$1.04/Index task) — elite value for a near-frontier coding/agent tier; noFreeId (no $0 tier) caps below 100.
- **Overall Score: 73/100.** (70 + 72 + 75 + 70 + 76) / 5 = 363 / 5 = 72.6 → 73.

> ⚠️ **Reconciliation notes:** (1) Repo `meta.json` flags hy3 "Apache 2.0 open weights, self-hosted" + `noFreeId`, but LLMPodium lists "License: Proprietary; Parameters: Not disclosed." I keep the repo curated open-weights description but cite LLMPodium's classification; (2) **262K context (not 1M)** is the key reason this is ~73, not higher, despite GPQA 90.4%; (3) LLMPodium's 100-point category indices (Value 99.9, Long Context 87.5, Intelligence 42.2, Coding 26.8…) are a different scale — cited as raw evidence, not substituted for the 1–100 scores. Repo `model-comparison.md` average = 73.9 (audit); my Index-anchored re-normalization = 73 (reconciles ~73–74).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (LLMPodium Hunyuan Hy3 profile, 2026-06 window; Artificial Intelligence Intelligence Index via LLMPodium; repo `meta.json`). Re-normalized via `model-comparison.md` v4, anchored on AA Intelligence Index v4.3.2 = 41.0. Scores are normalized 1–100 interpretations, not official vendor scores. The 262K-context (not 1M) and open-vs-proprietary discrepancies are flagged above. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.
