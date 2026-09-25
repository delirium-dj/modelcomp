# Claude Opus 5.5 — findings by Claude 4.5 Opus

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

---

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Claude Opus 5.5 is Anthropic's most capable Opus model suitable for agentic coding, knowledge work, and long-running tasks. It performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5.
- **Provider / access:** Available on the Claude Platform natively, and in Amazon Web Services, Google Cloud, and Microsoft Foundry. For business users and consumers, Opus 5.5 is available on Claude for Pro, Max, Team, and Enterprise users. Chat Completions / Messages API. API ID: `claude-opus-5-5`.
- **Release / knowledge:** Anthropic released Claude Opus 5.5 on September 22, 2026. Knowledge cutoff of June 2026.
- **IDs:** `anthropic/claude-opus-5-5`. The API ID is `claude-opus-5-5`. Like `claude-opus-5`, it is a fixed ID with no date suffix. No verified Free tier ID exists on OpenCode Zen at time of writing.
- **Context window:** 1M tokens, with up to 128K output tokens. 1,000,000-token context window with 128,000-token max output and a June 2026 knowledge cutoff, per Anthropic's Opus 5.5 model documentation.
- **Modalities:** Claude Opus 5.5 is multimodal and can accept both text and images as input. Text out. Thinking is always on. Use the effort parameter (low through max) to control how much it reasons. Tool calls supported; JSON mode supported.
- **Pricing (as of 2026-09-25):** $4 input / $0.20 cache read / $5 (5-min) or $8 (1-hr) cache write / $20 output per 1M tokens. Paid tier only; standard Anthropic privacy terms apply for API usage.
- **Architecture:** Proprietary. Claude Opus 5.5 is released under a Proprietary license. Parameter count and MoE/dense topology not publicly disclosed by Anthropic.

---

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 4.0: **66.4%** (Anthropic self-reported at xhigh effort, safeguards on — source: llm-stats.com/blog/research/claude-opus-5-5-launch citing Anthropic launch table)
- Terminal-Bench 2.1: no verified public score found for Opus 5.5 specifically (Opus 5 was 89.1% on TB2.1 — source: morphllm.com)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2.1: **1846 Elo** (Anthropic self-reported — source: llm-stats.com/blog and tosea.ai citing Anthropic launch table)
- AutomationBench (Zapier, no fallback): **40.0%** (Anthropic self-reported — source: llm-stats.com/blog citing Anthropic launch table)
- CursorBench 4.0: **57.8%** (Anthropic self-reported — source: llm-stats.com/blog citing Anthropic launch table)
- OSWorld 2.0 (partial): **81.8%** / (strict): **48.7%** (Anthropic/system card — source: llm-stats.com/blog)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

**Reasoning / knowledge:**

- GPQA Diamond: no verified public score found for Opus 5.5 (Anthropic did not publish this for the 5.5 launch; Opus 5 reference ~84.1% per kunya.ai)
- HLE (with tools): **67.7%** (Humanity's Last Exam tests multi-step, expert-level academic and professional reasoning. With tools enabled, Opus 5.5 tops the board at 67.7%, advancing past Fable 5.1 (65.6%), Opus 5 (63.6%), and GPT-6 Astra (57.2%) — source: Vellum citing Anthropic launch table)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic self-reported — source: llm-stats.com/blog)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **58 / #1** (Opus 5.5 took the top spot on the Artificial Analysis Intelligence Index with an index score of 58 at max effort, leading on six of the ten core evaluations — source: Vellum citing Artificial Analysis)
- AA-Briefcase (knowledge work Elo): **1822** (reaching an Elo of 1822 on the AA-Briefcase knowledge work evaluation — source: Vellum citing Artificial Analysis)
- BenchLM overall: **88.45/100, rank #2 of 196** (BenchLM, estimated from 47 source-displayable rows)
- Omniscience Accuracy / Hallucination Rate: no verified public score found for Opus 5.5 specifically

**Coding:**

- SWE-bench Pro: **89.9%** (System Card §8 reports SWE-bench Pro 89.9% — source: llm-stats.com/blog citing Anthropic system card)
- SWE-bench Verified: no verified public score found (Anthropic did not publish a Verified number for Opus 5.5 at launch)
- DeepSWE v1.1: **74.2%** (System Card §8 adds DeepSWE v1.1 74.2% — source: llm-stats.com/blog citing Anthropic system card)
- FrontierCode v1.1 Main: **54.4%** (Anthropic self-reported — source: llm-stats.com/blog)
- LiveCodeBench: no verified public score found for Opus 5.5 (Opus 5 reference 89.03% via vals.ai)
- SciCode / AA-SciCode: **66.9%** (SciCode 66.9% — source: Vellum citing Artificial Analysis)
- Chartography (with tools): **89.0%** (Anthropic self-reported — source: tosea.ai citing Anthropic launch table)
- Vibe Code Bench: no verified public score found for Opus 5.5

**Long context:**

- Claude models since Opus 4.7 use a newer tokenizer that produces roughly 30% more tokens for the same text. A 1M window holds about 555k words. No MRCR / RULER / GraphWalks retrieval score published for Opus 5.5 at launch. Needle-in-a-Haystack at 1M context: no verified public score found for Opus 5.5 specifically (Opus 5 was reported at 100% per kunya.ai, but no same-harness Opus 5.5 number available).

---

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 4.0 at 66.4% (xhigh, safeguards on) is a strong result but uses a newer, harder version (TB4.0 vs TB2.1 frontier baseline), placing it in the mid-to-upper tier. GDPval-AA v2.1 at 1846 Elo exceeds the frontier threshold (1750+ = 90-100 tier). AutomationBench at 40.0% is mid-tier. Averaged across available tool/agentic scores, and with no Tau3-Banking or Toolathon data, score is capped just below frontier ceiling.

- **Reasoning: 92/100.** HLE with tools at 67.7% decisively exceeds the frontier threshold (40%+ = 90-100). AA Intelligence Index at 58 (#1 ranked globally per Artificial Analysis) and BenchLM rank #2 confirm top-of-leaderboard standing. GPQA Diamond not published for Opus 5.5 (expected ~94% based on trend, but not counted). Score lands at the high end of frontier range.

- **Context window: 95/100.** Claude Opus 5.5 has a 1M-token context window (≥1M = 95-100 tier). No verified MRCR/RULER retrieval score at 512K+ published for Opus 5.5, so score is capped at 95 rather than 100 (100 requires ≥98% retrieval at 512K+ verified).

- **Multimodal: 65/100.** Claude Opus 5.5 is multimodal and can accept both text and images as input. No video, audio, or non-text output confirmed. Image + text in = 60-70 tier. Scored 65.

- **Coding: 95/100.** SWE-bench Pro 89.9% and DeepSWE v1.1 74.2% both clear frontier thresholds (DeepSWE 74%+ = 90-100). SciCode at 66.9% also exceeds the 55%+ frontier bar. Multiple dimensions at or above frontier ceiling; score near top of range.

- **Cost efficiency: 76/100.** Opus 5.5 costs $4 per million input tokens and $20 per million output tokens. At $4/$20, this is between the ~$3/$15 (~60) and ~$10/$50 (~30) tiers, but closer to the lower-priced bracket. Using interpolation from the methodology scale: $4 in / $20 out ≈ 76. (Cost efficiency scored independently, not counted in Overall.)

- **Overall Score: 86.8/100.** Calculated as: (87 + 92 + 95 + 65 + 95) / 5 = 434 / 5 = **86.8** (half-up). _Best-fit recommendation:_ Claude Opus 5.5 is the strongest verified choice for agentic coding agents, SWE-Pro-class software engineering, and knowledge-intensive professional work at sub-Fable pricing; teams sensitive to multimodal video/audio needs or long-context retrieval verification should evaluate alternatives.

---

## Signature

- Provided by: **Claude 4.5 Opus (anthropic/claude-opus-4-5)** — 2026-09-25
- Method: Fresh public internet research via web search across official Anthropic docs (`anthropic.com/claude-opus-5-5`), AWS blog, llm-stats.com, benchlm.ai, vellum.ai, tosea.ai, kingy.ai, alphacorp.ai, and codersera.com; scores are normalized 1–100 interpretations using the v4 methodology, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol.md`, using the same headings.
