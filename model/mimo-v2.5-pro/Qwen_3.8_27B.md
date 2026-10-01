# MiMo V2.5 Pro — findings by Qwen 3.8 27B

- Source: Xiaomi/MiMo-V2.5-Pro (`xiaomi/mimo-v2-5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship open-weights MoE (1.02T total, 42B active) for demanding agentic and 1,000+ tool-call workloads; text-focused Pro sibling of the omni MiMo-V2.5.
- **Provider / access:** Xiaomi native `mimo.xiaomi.com/mimo-v2-5-pro` (per project source list); OpenCode Zen ID `xiaomi/mimo-v2-5-pro` (no Zen Free ID).
- **Release / knowledge:** MiMo-V2.5 generation (2026 open-weights line); knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2-5-pro` (no Free ID on Zen)
- **Context window:** 1M (Base 256K) per curated meta; AA lists 1M.
- **Modalities:** Text-only (Pro variant; the non-Pro V2.5 is the omni variant).
- **Pricing (as of 2026-09-29):** ~$0.44/$0.87 per 1M (paid, no Zen Free ID); open weights (self-host $0).
- **Architecture:** 1.02T total / 42B active MoE; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: no standalone verified public score found for this exact ID (agentic capability is inside the AA Index composite below)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (v4.3.2 composite; AA LLM leaderboard 2026-09-29 snapshot; mid-pack of 250+ tracked models)
- GPQA Diamond / HLE: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER: no verified public score found (1M window served; Pro is the text-only long-horizon variant)

Cost / speed:

- Cost per AA Index task **$0.05**, output speed **32 tok/s** (AA leaderboard)

### Normalized scores (1–100)

- **Tool use: 66/100.** Built for 1,000+ tool-call agentic tasks (curated meta) and cheap per-task ($0.05), but AA Index 26 is mid-pack for the composite that includes TB 4.0/GDPval-AA, and no dedicated TB/Tau numbers were verified for this ID.
- **Reasoning: 72/100.** AA Index 26 places it solidly above mid-tier and below the frontier 40+ cohort (Qwen3.8 2.4T A95B 40, GLM-5.3 45, Kimi K3 44); no standalone GPQA/HLE verified.
- **Context window: 95/100.** 1M context (≥1M band = 95–100); no verified ≥98% retrieval-at-512K figure found, so the band floor applies.
- **Multimodal: 15/100.** Text-only Pro variant — image/audio/video inputs belong to the omni MiMo-V2.5 sibling, not this ID.
- **Coding: 64/100.** No verified public SWE-bench/LiveCodeBench/SciCode number found; derived from AA Index 26 (includes SciCode) and agentic-coding positioning; missing coding benchmarks cap it.
- **Cost efficiency: 95/100.** ~$0.44/$0.87 per 1M is well under the ~$0.60/$2.20 ≈ 92 reference, and open weights allow $0 self-hosting; 32 tok/s is slower than the flash-tier reference.
- **Overall Score: 62/100.** (66 + 72 + 95 + 15 + 64) / 5 = 62.4 → 62 — the value pick for very long, tool-heavy text agentic loops; pair with the omni V2.5 when vision/audio is needed.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Artificial Analysis LLM leaderboard snapshot 2026-09-29; curated project meta.json for specs/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
