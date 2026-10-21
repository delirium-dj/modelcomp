# Gemini 4 Argon — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 4 Argon (`opencode/gemini-4-argon`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's flagship frontier model for long-horizon software engineering, enterprise research, and cybersecurity, featuring an industry-leading 1M-token output window. Gated launch.
- **Provider / access:** Google AI / Vertex AI `opencode/gemini-4-argon`. Chat Completions API. No free tier — gated access.
- **Release / knowledge:** 2026-09-30; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/gemini-4-argon` (no Free ID; gated launch)
- **Context window:** 1M total / 262K output (1M via continuation). Verified via meta.json and Google documentation.
- **Modalities:** Text, image, video input; text output. Reasoning supported. Tool calls supported. No audio input.
- **Pricing (as of 2026-10-21):** Intro $2.00/$10.00 per 1M; standard $4.00/$20.00 per 1M; cached $0.10/1M.
- **Architecture:** Proprietary. Google DeepMind flagship. Designed for massive-output long-horizon code synthesis.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** (Google DeepMind official; DeepMind blog)
- Vals Index (finance/legal workflows): **68.9%** — #1 rank (Google report; meta.json)
- AutomationBench: **51.3%** (blog.google)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found specifically (AI tracker cluster: top-tier, ~90% range)
- Artificial Analysis Intelligence Index: **~52–53** (Artificial Analysis, MindStudio)

Coding:

- DeepSWE v1.1: **77.9%** — #1 rank (Google DeepMind official; outperforms Claude Opus 5.5 at 74.2% and GPT-6 Astra at 74.1%)
- SWE-bench Verified: **62.4%** (ToolsToFind comparative; trails Claude Opus 5.5's 65.1% on narrow terminal-interaction tasks)
- LiveCodeBench: no verified public score found

Long context:

- No RULER/MRCR scores published. 1M-token output window enables whole-document/application generation in one pass (Google blog). Real-world multi-file codebase rewrites confirmed.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vals Index #1 at 68.9% on finance/legal agentic tasks. AutomationBench 51.3%. Terminal-Bench 57.4% is moderate — trails specialized CLI agents. Capped by Terminal-Bench gap vs Claude Opus 5.5.
- **Reasoning: 85/100.** Top-tier AI tracker cluster (~90% GPQA range). Tight with other late-2026 frontier models. AA Intelligence Index 52–53. Capped by lack of a confirmed GPQA Diamond or HLE number.
- **Context window: 92/100.** 1M total / 262K output per tier mapping, with continuation enabling 1M output. Unprecedented output headroom. Scored at 92.
- **Multimodal: 68/100.** Text + image + video input. No audio. Broad multimodal input coverage. Scored at 68.
- **Coding: 82/100.** DeepSWE v1.1 #1 at 77.9% is top-of-leaderboard for complex long-horizon code synthesis. SWE-bench Verified 62.4% is somewhat below frontier on narrow tasks. The massive output window is a unique practical coding advantage.
- **Cost efficiency: 35/100.** Intro $2/$10 moving to $4/$20 per 1M is premium pricing. Gated access further limits value for most users.
- **Overall Score: 80/100.** (72 + 85 + 92 + 68 + 82) / 5 = 79.8 → 80. A top-tier frontier model uniquely distinguished by its 1M output window and #1 DeepSWE performance for long-horizon code synthesis. Best for enterprise teams needing to generate or refactor massive codebases in a single pass.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: Public internet research cross-referencing Google DeepMind official blog, NeuralTrust, LLM-stats, MindStudio, Artificial Analysis, and ToolsToFind; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
