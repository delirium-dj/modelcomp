# Claude Sonnet 3.7 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-3-7-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (Claude 3.7 Sonnet)
- **Short description:** Anthropic's February-2025 flagship and "the first hybrid reasoning model on the market" — standard and extended-thinking modes in one model with user-visible, budgeted thinking (up to the 128K output limit). Also the launch model for Claude Code. Legacy: between Claude Sonnet 3.5 and Sonnet 4; no longer in Anthropic's current or legacy docs lineup.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`), Amazon Bedrock, Google Vertex AI. Not on OpenCode Zen (no Zen ID at 2026-10-01).
- **Release / knowledge:** released 2025-02-24. Knowledge cutoff not re-verified.
- **IDs:** `claude-3-7-sonnet` (dated snapshots exist). No Zen ID.
- **Context window:** 200K tokens per the Claude 3.x Sonnet family convention (not re-stated in current docs); output limit 128K tokens including thinking tokens (official announcement).
- **Modalities:** text and image input, text output; hybrid reasoning (standard mode = upgraded 3.5 Sonnet; extended thinking mode = self-reflective, budgeted via `budget_tokens`); tool use.
- **Pricing (as of release; 2026-10-01 status):** $3 / $15 per MTok in/out — unchanged from predecessors, thinking tokens included. No free tier; retired from current lineups.
- **Architecture:** proprietary, size undisclosed; ASL-2-era safety stack; 45% fewer unnecessary refusals vs Sonnet 3.5 (official system card claim); prompted-injection resistance training noted for computer use.

### Raw benchmarks found

Agent / tool use:

- TAU-bench: **state-of-the-art at release** (official; score published only in chart images — no verified number in text; scaffolding: planning-tool prompt addendum, max steps raised 30→100)
- Terminal-Bench 2.x / MCP Atlas / Toolathlon: no verified public score found (predates these harnesses)
- Claw-Eval / ClawProBench: no verified public score found
- Claude Code launch vehicle: "completed tasks in a single pass that would normally take 45+ minutes of manual work" (official, qualitative)

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME: vendor benchmark table published values only in images — no verified numbers retained in current text sources
- Extended thinking: first hybrid reasoning model with fine-grained API budget control (official, architectural)
- Omniscience / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **63.7%** pass@1 with a minimal scaffold (bash + string-replace file editing + planning tool; n=489 solvable subset of 500; unsolvable problems counted as failures) — state of the art at release (official)
- SWE-bench Verified (high-compute, parallel test-time compute + visible-regression filtering): **70.3%** (official)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 58/100.** TAU-bench was state-of-the-art at release (official, but unquantified in retained text) and 3.7 Sonnet was the original Claude Code agent model; it predates the modern agentic harnesses (Terminal-Bench, MCP Atlas) and retains no verified numbers for them. Capped by the absence of quantitative agentic evidence.
- **Reasoning: 60/100.** The hybrid-reasoning architecture (visible, budgeted thinking) was a genuine first and the extended-thinking gains in math/science were official claims — but no GPQA/HLE/AIME numbers survive in verifiable text for this ID. Capped by zero retained reasoning scores.
- **Context window: 70/100.** 200K per the 3.x Sonnet family convention with a verified 128K output limit that includes thinking tokens. Capped by the convention-level (not re-stated) verification of the input window.
- **Multimodal: 65/100.** Text + image in, text out per the Claude 3.x family and the official multimodal benchmark-table claims; no per-model MMMU rows retained. Image-in band (60-70).
- **Coding: 72/100.** SWE-bench Verified 63.7% pass@1 on a minimal scaffold (70.3% with parallel test-time compute) was state of the art in February 2025 — a benchmark-quality number with full methodology disclosure. Capped by its age: five model generations have passed since.
- **Cost efficiency: 60/100.** $3/$15 per MTok matches the ~60 reference bracket; no Zen presence, no free tier, and far better value exists in every current tier.
- **Overall Score: 65/100.** Half-up mean of the five quality dims: (58 + 60 + 70 + 65 + 72) / 5 = 65.0 → 65. Historically important (first hybrid reasoner, Claude Code's launch model, then-SOTA SWE-bench) but a 2025-era legacy pick — every current Sonnet strictly dominates it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (Anthropic's official Claude 3.7 Sonnet + Claude Code announcement with full benchmark-methodology appendix; BenchLM has no page for this ID); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
