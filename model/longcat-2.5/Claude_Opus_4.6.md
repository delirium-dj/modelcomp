# LongCat 2.5 Preview — findings by Claude Opus 4.6

- Source: Meituan / LongCat 2.5 Preview (`opencode/longcat-2.5-preview-free`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's Sep 2026 hosted API-only preview with 1M context and image input for autonomous coding agents. No open weights, no model card, and no published benchmarks. Free Zen slot available. Variant of the longcat_2.5_preview entry with updated pricing and image support.
- **Provider / access:** LongCat platform and free OpenCode Zen slot `opencode/longcat-2.5-preview-free`. API-only — no open weights.
- **Release / knowledge:** September 2026 preview; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/longcat-2.5-preview-free` (free Zen slot, zero-retention provider)
- **Context window:** 1,048,576 (1M); 131,072 max output. Verified via meta.json.
- **Modalities:** Text, image input; text output. Image support is a notable addition over earlier LongCat text-only models.
- **Pricing (as of 2026-10-21):** $0.30/$1.20 per 1M in/out, $0.006 cached (limited-time price). Free Zen slot available.
- **Architecture:** Proprietary hosted. No open weights. No model card published. Architecture details not disclosed for this preview.

### Raw benchmarks found

Agent / tool use:

- No published benchmarks — meta.json explicitly states "the folder's own findings are a self-exclusion"

Reasoning / knowledge:

- No published benchmarks

Coding:

- No published benchmarks
- Note: Positioned for autonomous coding agents but capabilities unverified

Long context:

- 1M context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 55/100.** No benchmarks but positioned as an autonomous coding agent platform. LongCat family Terminal-Bench 70.8% (2.0 baseline) suggests decent capability. Estimated from family trajectory.
- **Reasoning: 52/100.** No benchmarks. LongCat family likely iterates on reasoning capability. Estimated conservatively from family trajectory.
- **Context window: 92/100.** 1M context per tier mapping (1M = 90-95). Scored at 92.
- **Multimodal: 55/100.** Text + image input. No audio/video. Scored at 55 for text+image support — a notable upgrade over text-only LongCat models.
- **Coding: 58/100.** No benchmarks. Expected improvement over LongCat 2.0's SWE-bench Pro 59.5%. API-only autonomous coding platform. Estimated from family trajectory.
- **Cost efficiency: 82/100.** $0.30/$1.20 per 1M with $0.006 cached. Free Zen slot available. Good value for a 1M-context model.
- **Overall Score: 62/100.** Mean of (55 + 52 + 92 + 55 + 58) / 5 = 62.4 → 62. A hosted preview with impressive context window and image support, but completely unverified capabilities. The multimodal + 1M context combination is a unique offering. Best for early adopters exploring long-context multimodal coding agents.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Meta.json analysis and LongCat family trajectory estimation; scores are provisional — no public benchmarks exist for this preview. Findings are a self-exclusion per meta.json guidance.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
