# Iceman — findings by Inkling 2 Small

- Source: Unknown vendor — OpenCode stealth model (`iceman-free` / `iceman-contributor`), lab listed as "Unknown" by OpenCode; suspected Microsoft MAI Thinking 1 (tokenizer match, unconfirmed)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (Iceman Free on Zen / Iceman Contributor on OpenCode Go) — stealth model
- **Short description:** An unclaimed stealth model that appeared on OpenCode (Go, 2026-10-24) and OpenCode Zen as Iceman Free (2026-11-10) — free, 262K context, tool calling, text-only. Identity unconfirmed; strongest lead (tokenizer + self-introduction) points at Microsoft's MAI Thinking 1; no lab has claimed it. Not a released checkpoint from any named vendor.
- **Provider / access:** OpenCode Zen `opencode/iceman-free` (free, limited-time, prompts/completions retained for training; API at `https://opencode.ai/inference/openai/v1/chat/completions`, rate-limited) and OpenCode Go `opencode-go/iceman-contributor-free` (free with Go subscription ≥ $10/mo + "allow paid endpoints that train on request data"). Closed weights.
- **Release / knowledge:** First sighted 2026-10-23/24 (models.dev commit 2026-10-24 20:09 UTC, PR #58792); OpenCode data page counted 10,856 users / ~417B tokens on day one; Iceman Free listed on Zen 2026-11-10. Knowledge cutoff unknown.
- **IDs:** `opencode/iceman-free` (Zen); `opencode-go/iceman-contributor-free` (Go)
- **Context window:** 262,144 total / 131,072 max output — per OpenCode listing + stealthmodels.com research (verified 2026-11-10)
- **Modalities:** Text in, text out; reasoning levels low / medium / high / xhigh (rejects `max`); tool calling; no image input
- **Pricing (as of 2026-11-10):** **Free** ($0/$0) during the limited-time window on both routes; data-retention caveat: prompts and completions are kept and used to improve the model (explicit consent requirement on Go)
- **Architecture:** Closed weights; tokenizer identical to MAI Thinking 1 / Glyph Cluster / GPT-6 family / gpt-oss-120b (23/23 phrase match, two independent tests) — cannot distinguish OpenAI GPT-6-class vs Microsoft MAI lineage from tokenization alone; proprietary either way

### Raw benchmarks found

Agent / tool use:

- Tool calling: supported, four reasoning levels (low→xhigh), measured ~46 tokens/s output speed, ~0.9s to first token (stealthmodels.com research, 2026-10-25); no named agentic benchmark (Tau-bench / MCP-Atlas) found
- ICELMAN on OpenCode data page: 417B tokens day one, 10,856 users — usage, not capability

Reasoning / knowledge:

- StealthMark overall (stealthmodels.com, 2026-10-25, private demanding-task suite): **19.2/100** — rank 51/56
- StealthMark General Intelligence: **11.7/100**; Visual Intelligence: **31.0/100**
- Newton's Mirror (physical/spatial/recursive): **10.1** — rank 52/56; Ground Truth: **20.2** — rank 50/56
- Foresight (games, multi-step planning): **3.2/100** — rank 52/52; Latch: **3.6/100** — rank 49/53
- Reasoning efficiency: single-step 30 (rank 49/54), multi-step 37 (rank 25/52)
- HLE / GPQA / MMLU: no verified public score found

Coding:

- SWE-bench / LiveCodeBench / SciCode: no verified public score found
- SVG-generation tasks (Visual): Pelican 38.0, Selfie 39.3, Beach 46.4 — weak-but-nonzero visual/code-adjacent output

Long context:

- No MRCR/RULER-style retrieval score found; 262,144 window vendor-documented only

### Normalized scores (1–100)

- **Tool use: 34/100.** Tool calling exists and runs at ~46 tok/s with four reasoning levels, but no agentic success-rate benchmark has been published; capability evidence is usage volume, not correctness.
- **Reasoning: 15/100.** StealthMark 19.2 overall / 11.7 General (rank 51–52/56) — the only independent capability measurement available places it near the bottom of its cohort on physical reasoning and planning; efficiency scores (30/37) are also below average.
- **Context window: 54/100.** 262,144 in / 131,072 out is a real, documented window; no independent retrieval benchmark; capped mid-range.
- **Multimodal: 15/100.** Text-only in/out — floor per methodology.
- **Coding: 22/100.** No published coding benchmark; planning games (Foresight 3.2, Latch 3.6) and SVG-coding visuals all bottom-quartile — a weak coder on current independent evidence.
- **Cost efficiency: 100/100.** $0/$0 — free during the limited-time window (with data-retention cost).
- **Overall Score: 28/100.** Mean of (34 + 15 + 54 + 15 + 22) / 5 = 140/5 = 28.0. A free, mysterious, high-context text model — usable for bulk throwaway prompts and curiosity testing, never for training-data-sensitive work and not competitive on measured capability.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (OpenCode listings, models.dev, independent StealthMark benchmarks, tokenizer analysis); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: zero-cost bulk/throwaway prompts; do not send sensitive data; treat identity claims as unverified.
- Reference URLs:
  - [stealthmodels.com — Iceman Contributor model guide](https://stealthmodels.com/iceman-contributor)
  - [stealthmodels.com — Iceman Contributor benchmarks (StealthMark 19.2/100)](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [OpenCode Zen docs — models](https://opencode.ai/docs/models/)
  - [aipromonow.com — OpenCode Go Iceman free promo](https://www.aipromonow.com/en/promos/opencode-go-iceman-free-unlimited)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
