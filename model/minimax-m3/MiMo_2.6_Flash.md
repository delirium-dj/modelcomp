# MiniMax-M3 — findings by MiMo 2.6 Flash

- Source: MiniMax (`minimax-m3`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3
- **Short description:** MiniMax's native-multimodal open-weights flagship (released ~2026-06-01; technical report arXiv:2606.13392) — **428B total / 23B active MoE** trained mixed-modality from step one (text, image, video), with **MiniMax Sparse Attention** delivering 9× prefill and 15× decode speedups vs M2 at 1M context (per-token compute down to 1/20). Vendor positions it at "frontier-level long-horizon agentic" performance; independent AA put it at Index **44** on the launch-era v4.1 scale (with 23B active — the highest of its size class at the time), re-based to **29** on today's v4.3.2. Distributed under the MiniMax Community License (commercial use with restrictions); 15 API providers.
- **Provider / access:** Hugging Face (`MiniMaxAI/MiniMax-M3`), MiniMax API / MiniMax Agent, OpenRouter (`minimax/minimax-m3`), Novita and 13 others, SGLang/vLLM/Transformers/KTransformers/unsloth/ROCm ATOM; 57 community quantizations.
- **Release / knowledge:** released 2026-06-01 (catalog-added 2026-05-31); knowledge cutoff not published.
- **IDs:** `minimax-m3` / `MiniMaxAI/MiniMax-M3`.
- **Context window:** **1,048,576 tokens**, max output **512,000** (Writingmate catalog); MSA makes 1M economically servable.
- **Modalities:** **text + image + video in**, text out; reasoning yes (`thinking`: enabled / adaptive / disabled); tool calls yes (provider accepts tool parameters; agentic/cowork focus — Claw-Eval, MiniMax Agent product).
- **Pricing (as of 2026-10-07):** **$0.30 in / $1.20 out** per 1M, cached input **$0.06** (80% off); AA measures **$0.51 per Intelligence-Index task**; blended (7:2:1) ≈ $0.22/M; 94 t/s median (above its class's 73).
- **Architecture:** MoE 428B/23B active; MSA sparse attention; minimax-community license.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.2** (OSWorld benchmark owner, 2026-06-07, 358 tasks, 100-step) — **clears the 75% ref**
- APEX-Agents: **27.7** (Mercor benchmark owner, vendor-submitted); LHTB (Long-Horizon Terminal-Bench): 38.5 mean / **3 of 46 solved** (official Harbor harness); Claw-Eval: 74.5 (vendor)
- Terminal-Bench 2.1 / 4.0, MCP-Atlas, GDPval, ALE: **no rows found** (AA Index components exist but individual values not published in accessible sources)

Reasoning / knowledge:

- GPQA Diamond: **92.9** (Artificial Analysis, independent) — **clears the 90%+ ref**
- HLE text-only: **39.0** (AA independent, 2,158-question subset) — **misses the 40%+ ref by 1.0**
- AA Intelligence Index: **44** (v4.1 launch-era, per AA's launch coverage) → **29** (v4.3.2 current, #18/117) — **under the 60+ ref on both scales** (scale correction noted)
- LiveBench (2026-06-25): 67.3 overall; Arena Text: 1,440 (#96, 58.8K votes); Arena WebDev: 1,482 (#58)

Coding (vendor, HF eval results):

- SWE-bench Verified: **80.5** (internal infra, Claude Code scaffold, 4-run average) — strong
- SWE-bench Pro: **59.0** (Claude Code scaffold, aligned with official logic) — strong
- SciCode / DeepSWE / TB2.1 / coding-index rows: **not published in accessible sources**
- YC-Bench: $2.1M final assets (monetary metric)

Long context:

- 1M window via MSA; **no needle/MRCR/LCR figure found** → capacity + efficiency story only.

Multimodal:

- **Video-MME (w/ sub): 85.4** (vendor) and **MMMU-Pro: 78.1** (vendor) — solid video+vision rows; no audio input, no PDF rows.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 75.2 clears the ref (benchmark-owner run), Claw-Eval 74.5 decent; but Terminal-Bench, MCP-Atlas, GDPval and ALE are all absent, and LHTB's 3-of-46 solve rate shows the long-horizon gap.
- **Reasoning: 85/100.** GPQA 92.9 (AA independent) clears comfortably; HLE 39.0 lands a single point under its ref; the AA Index (44 → 29 across scale versions) never approaches 60.
- **Context window: 95/100.** 1M → ≥1M floor, with MSA making the window genuinely cheap to serve; no retrieval benchmark at any length to score higher.
- **Multimodal: 87/100.** Text + image + **video** in → video band (75–90); Video-MME 85.4 and MMMU-Pro 78.1 are both solid, held below 90 by no audio, no PDF, and vendor-only provenance on both rows.
- **Coding: 81/100.** SWE-bench Verified 80.5 and SWE-Pro 59.0 (both Claude Code scaffold, vendor-run) are legitimately strong absolute numbers; not a single coding *ref* row (TB2.1, SciCode, DeepSWE, coding index) is published, so nothing can be verified against the methodology's anchors.
- **Cost efficiency: 95/100.** $0.30/$1.20 with 80% cache, $0.51 per Index task, plus free self-hosting under a community license — near the floor of frontier-capable pricing; docking only for the commercial-use restriction and multi-provider price variance.
- **Overall Score: 86/100.** (82+85+95+87+81)/5 = 86.0 → 86 — the open-weights efficiency standout: ref-clearing GPQA and OSWorld, real video understanding, 80+ SWE scores from 23B active parameters, at a tenth of flagship prices — discounted for an HLE one point short, an Index that never clears 60, an LHTB solve-rate in the single digits, and benchmark silences where the methodology most wants to see Terminal-Bench and SciCode.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Hugging Face model card + eval results YAML, Artificial Analysis model page, Writingmate spec/benchmark catalog, OpenRouter catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
