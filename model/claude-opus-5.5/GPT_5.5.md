# Claude Opus 5.5 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus-class Claude 5.5 model is a proprietary frontier model aimed at high-end agentic coding, knowledge work, and long-running tool workflows.
- **Provider / access:** Anthropic Claude API and Claude Code; documented as a Claude API model with extended thinking and tool-use constraints in the Anthropic platform docs.
- **Release / knowledge:** Public platform documentation observed in the week before 2026-10-05; exact release date and knowledge cutoff were not exposed in the accessible snippets.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID in this repo's metadata)
- **Context window:** 1M input / 128K output in this repo's curated metadata; Anthropic pricing documentation distinguishes <=200K and 1M context tiers for Opus-class models.
- **Modalities:** Text and image in; text out; reasoning/thinking and tool use supported.
- **Pricing (as of 2026-10-05):** Paid Anthropic Opus pricing; public pricing PDFs show Opus-class standard prices at high-cost tiers, with 1M context carrying a premium.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Claude Platform Docs (**official model notes**): Opus 5.5 docs report tool-use behavior changes and required thinking, but the accessible result did not expose complete numeric benchmark tables (Anthropic Platform Docs, `https://platform.claude.com/docs/en/models/opus-5-5/overview`).
- Community Claude Code harness (**agentic workflow proxy**): 306 Claude Code sessions reported Opus 5.5 passing more tests at about half the cost per task than Sonnet 5.5 in that user's plugin benchmark, but this is a community benchmark rather than an official public suite (`https://www.reddit.com/r/ClaudeCode/comments/1wtbj8x/i_benchmarked_a_30line_claude_code_plugin_on_opus/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Tom's Guide launch coverage: **1,846** score for Opus 5.5 was reported, but the snippet did not identify the exact harness (`https://www.tomsguide.com/ai/claude/claude-sonnet-5-5-just-launched-heres-why-its-about-to-become-your-daily-driver`).
- Anthropic launch discussion mirror: claims Opus 5.5 performs around Fable 5.1 level and above Opus 5 on reported benchmarks, but full official numbers were not visible in the accessible result (`https://www.reddit.com/r/ClaudeAI/comments/1wnecg9/introducing_claude_opus_55_the_first_model_in_our/`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Community Claude Code benchmark: **306 sessions** across Opus 5.5, Sonnet 5.5, and Codex comparison runs; useful as a real-world proxy but not a standardized public coding leaderboard (`https://www.reddit.com/r/ClaudeCode/comments/1wtbj8x/i_benchmarked_a_30line_claude_code_plugin_on_opus/`).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- Anthropic pricing and repo metadata both support a 1M-context Opus tier; no independent MRCR/RULER retrieval score for Opus 5.5 was found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Official docs expose active tool-use semantics and community Claude Code evidence supports strong agent workflows; capped by lack of standardized public Terminal-Bench/Tau benchmark numbers.
- **Reasoning: 92/100.** Launch coverage places Opus 5.5 at a frontier level and above Opus 5 in reported benchmark claims; capped by incomplete public numeric disclosure in accessible sources.
- **Context window: 95/100.** The 1M / 128K context profile is top tier for a proprietary model, capped only by absent independent long-context retrieval scores.
- **Multimodal: 70/100.** Text and image input are supported, but the model is not documented here as full audio/video multimodal output.
- **Coding: 94/100.** Claude Code community runs and Anthropic positioning point to excellent coding-agent performance; capped by missing public SWE-bench/LiveCodeBench numbers for this exact model.
- **Cost efficiency: 42/100.** Opus-class paid pricing is expensive, and 1M context uses premium rates despite improved per-task efficiency claims.
- **Overall Score: 88/100.** Mean of the five quality dimensions; best fit is expensive frontier coding and enterprise-agent work where reliability matters more than token price.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
