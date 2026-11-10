# GLM-4.5 Flash — findings by Inkling 2 Small

- Source: Z.ai / Zhipu AI (`glm-4.5-flash`, Zen route `opencode/glm-4.5-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash (GLM-4.5-Flash)
- **Short description:** Z.ai's free, high-speed lightweight member of the GLM-4.5 family — "Free, Strong Performance, Excellent for Reasoning, Coding & Agents" (vendor card). A distilled/lighter operating point of the 355B/32B-active GLM-4.5 MoE lineage, not a separately trained flagship. Text-only.
- **Provider / access:** Z.ai developer platform (API, `glm-4.5-flash`) and OpenCode Zen (`opencode/glm-4.5-flash`); OpenAI-compatible Chat Completions API; interleaved Thinking/Non-Thinking modes (`thinking.type` toggle, dynamic by default).
- **Release / knowledge:** GLM-4.5 family launched July 2025 (GLM-4.5 released Jul 28, 2025; Flash tier available then); knowledge cutoff not stated.
- **IDs:** `glm-4.5-flash` (Z.ai); `opencode/glm-4.5-flash` (Zen)
- **Context window:** 128K total (GLM-4.5 family); max output up to ~98K (Zen listing) / 96K (vendor card) — vendor docs, verified 2026-11-10
- **Modalities:** Text in/out only; reasoning yes (dynamic thinking default); function calling, structured outputs, streaming, context caching; JSON mode
- **Pricing (as of 2026-11-10):** **Free** — $0.00/$0.00 in/out on Z.ai developer platform and free on Zen (limited-time free per Z.ai pricing page, checked 2026-11-10). No paid tier for this model.
- **Architecture:** Distilled/lightweight variant of the GLM-4.5 MoE line (355B total / 32B active for the flagship; Flash is the free high-speed operating point — exact parameter count not officially published); proprietary weights (GLM-4.5 base is open-weight on HF under the GLM license, but this route is API-only)

### Raw benchmarks found

No benchmark published for the Flash operating point specifically — family-level numbers below are **provisional proxies**, not Flash measurements. Every Flash row: no verified public score found.

Agent / tool use:

- BrowseComp (GLM-4.5, with web-browsing tool): **26.4%** (z.ai blog, Jul 2025) — family proxy
- BFCL v3 / TAU-Bench: family reports top-tier results (aggregate 12-benchmark average, GLM-4.5 "ranks second globally, first among open-source models" — z.ai blog) — Flash: no verified public score found
- Terminal-bench: family-aggregate only — Flash: no verified public score found

Reasoning / knowledge:

- MMLU Pro / AIME24 / MATH 500 / GPQA / HLE (family aggregate): no Flash-specific breakdown published — no verified public Flash score found
- GLM-4.5 flagship reference (not Flash): SWE-bench Verified **64.2%** (aireleasetracker.com), SciCode strong per z.ai charts

Coding:

- SWE-bench Verified (GLM-4.5 flagship): **64.2%** — provisional family proxy; Flash: no verified public score found

Long context:

- No long-context retrieval benchmark published for Flash; 128K window vendor-documented

### Normalized scores (1–100)

- **Tool use: 55/100.** Family tooling is genuinely strong (BFCL/TAU aggregate #1 open-source claim); Flash is the free distilled tier with zero published agentic numbers of its own — scored meaningfully below family flagship.
- **Reasoning: 52/100.** Dynamic thinking by default; family-aggregate reasoning is strong, but no Flash-specific GPQA/HLE/MMLU-Pro measurement exists; scored conservatively.
- **Context window: 66/100.** 128K window with up to ~96–98K max output — solid, vendor-documented; no independent retrieval benchmark (MRCR/RULER) for Flash.
- **Multimodal: 15/100.** Text-only input/output — floor score per methodology.
- **Coding: 50/100.** Flagship SWE-bench 64.2% is adjacent evidence only; the vendor itself positions Flash as the lightweight tier with "lower headroom on multi-file SWE-bench tasks" (folder metadata tradeoff) — scored well below flagship.
- **Cost efficiency: 100/100.** $0.00/$0.00 — free on Z.ai and Zen.
- **Overall Score: 48/100.** Mean of (55 + 52 + 66 + 15 + 50) / 5 = 238/5 = 47.6 → 48. A free, fast, text-only agentic-ish Flash tier for zero-cost prototyping and high-volume simple work — not a flagship substitute until Flash-specific evals exist.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (vendor docs, pricing pages, family-level leaderboards); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: zero-cost experimentation and simple agentic/classification work; escalate to GLM-4.5/4.7 for hard coding.
- Reference URLs:
  - [Z.AI Developer Docs — GLM-4.5 (model family card, thinking modes)](https://docs.z.ai/guides/llm/glm-4.5)
  - [Z.AI Developer Docs — Pricing (GLM-4.5-Flash: Free)](https://docs.z.ai/guides/overview/pricing)
  - [Z.ai blog — GLM-4.5: Reasoning, Coding, and Agentic Abilities](https://z.ai/blog/glm-4.5)
  - [AI Release Tracker — GLM-4.5 (SWE-bench Verified 64.2%)](https://aireleasetracker.com/model/zai/glm-4.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
