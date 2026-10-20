# Cat Jam — findings by Claude Opus 4.6

- Source: Undisclosed vendor / Cat Jam (`opencode/cat-jam`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** Undisclosed vendor's stealth model on OpenCode Zen with 1M context for fast agentic coding. Free during stealth preview on Zen, OpenCode Go, and Vercel AI Gateway. Identity and benchmarks unverified.
- **Provider / access:** OpenCode Zen `opencode/cat-jam`, OpenCode Go, Vercel AI Gateway (free stealth preview).
- **Release / knowledge:** 2026; stealth preview.
- **IDs:** `opencode/cat-jam`
- **Context window:** 1,048,576 (1M) / 131,072 max output (262K at launch). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video.
- **Pricing (as of 2026-10-20):** Free ($0) on Zen/Go/Vercel during stealth preview. Vercel lane may use prompts for training.
- **Architecture:** Unknown. Stealth model — vendor, parameters, and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public benchmarks found — stealth model with unverified identity

Reasoning / knowledge:

- No verified public benchmarks found

Coding:

- No verified public benchmarks found

Long context:

- 1M context claimed. No retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No benchmarks. Stealth model with unknown agentic capabilities. Scored conservatively based on being positioned for "fast agentic coding."
- **Reasoning: 35/100.** No benchmarks. Unknown model — scored conservatively.
- **Context window: 92/100.** 1M context per tier mapping (1M = 90-95). The large context is the standout specification. Scored at 92.
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 35/100.** No benchmarks. Positioned for agentic coding but capabilities unverified. Scored conservatively.
- **Cost efficiency: 100/100.** Free stealth preview — $0 cost. Data privacy caveat on Vercel lane.
- **Overall Score: 42/100.** Mean of (35 + 35 + 92 + 15 + 35) / 5 = 42.4 → 42. A stealth model with an impressive 1M context window but completely unverified capabilities. Free is the main attraction. Use with caution — data may be used for training on some endpoints.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis only — no public benchmarks or documentation found; scores are conservative estimates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
