# Claude Mythos 5.1 — findings by GPT-6 Luna

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-access Claude configuration for vetted cybersecurity and life-sciences work. Anthropic says it shares identical model weights with Fable 5.1, but has more permissive safeguards; it is retained as a separate scored configuration because Anthropic assigns it a distinct API ID and access/safeguard profile.
- **Provider / access:** Anthropic Claude API (Messages API; verification required); also listed for Amazon Bedrock, Google Cloud, and Microsoft Foundry. Direct access is limited to organizations verified through Anthropic's programs.
- **Release / knowledge:** Released 2026-09-01; reliable knowledge and training-data cutoffs are June 2026, per [Anthropic's model documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview).
- **IDs:** Anthropic API `claude-mythos-5-1`; Amazon Bedrock `anthropic.claude-mythos-5-1`; Google Cloud and Microsoft Foundry `claude-mythos-5-1`. No public Free ID found.
- **Context window:** 1M tokens; maximum output 128K tokens ([Anthropic model documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)). No Mythos-specific public long-context retrieval result verified.
- **Modalities:** Text and image input; text output; adaptive thinking and tool use. No audio/video input or non-text output verified ([Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview)).
- **Pricing (as of 2026-10-29):** Paid, restricted access: $10 input / $50 output per 1M tokens; 5-minute cache writes $12.50, 1-hour cache writes $20, cache reads $0.25 per 1M tokens ([Anthropic model documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)). The docs state it has the same specifications and pricing as Fable 5.1.
- **Architecture:** Proprietary, undisclosed weights. Anthropic's [system card](https://assets.claude.com/0339e6a7c5c7b87f5c07798616dc32c215d14235.pdf) describes Fable 5.1 and Mythos 5.1 as configurations of one model with identical weights; Fable has additional high-risk-domain safeguards, while Mythos relaxes certain safeguards for vetted users.

### Raw benchmarks found

Three independent public search queries were followed by checks against Anthropic's model documentation, launch announcement, and system card. Scores below are attributed only where the source identifies Mythos 5.1; family-level figures are called out rather than silently assigned to it.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic system card, §8.6, [PDF](https://assets.claude.com/0339e6a7c5c7b87f5c07798616dc32c215d14235.pdf#page=171)); 66 tasks, 10 trials per task (660 trials), Claude Code `--bare`, maximum thinking effort; reported standard error ±1.6–2 points. The same evaluation reports Fable 5.1 at 55.8%; Anthropic says the gap reflects tasks where its earlier, less precise cyber safeguards intervened.
- Tau3-Banking, GDPval-AA, Terminal-Bench 2.1, and Claw-Eval: no verified Mythos-specific public score found. The system-card summary groups Fable 5.1 / Mythos 5.1 in a shared family column for several results, so those entries are not treated as Mythos-only measurements.

Reasoning / knowledge:

- ArXivMath (June 2026, 49 problems): **91.33% without tools; 93.88% with tools**, maximum effort, averaged over four runs per problem ([Anthropic system card, §8.10](https://assets.claude.com/0339e6a7c5c7b87f5c07798616dc32c215d14235.pdf#page=174)). Anthropic notes June 2026 training-data overlap is possible but unverified, so contamination cannot be ruled out.
- BioMysteryBench: **90.3%** on Human Solvable and **44.1%** on Human Difficult; Anthropic identifies these as Mythos 5.1 results ([system card, §8.19.1](https://assets.claude.com/0339e6a7c5c7b87f5c07798616dc32c215d14235.pdf#page=202)). This is specialized life-sciences evidence, not a general reasoning score.
- HLE: the system-card summary lists **60.9%** without tools and **65.0%** with tools in a combined Fable 5.1 / Mythos 5.1 family column. It does not disaggregate the configurations there, so these are not counted as Mythos-specific results.
- GPQA Diamond, LCR / MLCR, CritPt, and a standalone Intelligence Index: no verified Mythos-specific public score found.

Coding:

- Terminal-Bench 4.0: **60.9%** (details and harness above; [system card, §8.6](https://assets.claude.com/0339e6a7c5c7b87f5c07798616dc32c215d14235.pdf#page=171)).
- SWE-bench Pro, SWE-bench Verified, LiveCodeBench, and SciCode: no verified Mythos-only score found. The system-card summary groups the Fable 5.1 / Mythos 5.1 configuration for some coding results rather than reporting separate values.

Long context:

- Anthropic documents a 1M-token context window, but no verified Mythos-specific MRCR, RULER, or equivalent retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Mythos 5.1's exact-model 60.9% on Terminal-Bench 4.0 is strong agentic evidence; score is capped because TB4.0 is not the methodology's TB2.1 reference and no Tau3/GDPval/Claw-Eval result is isolated for Mythos.
- **Reasoning: 95/100.** The exact-model ArXivMath result is exceptional and the system card adds strong specialized science results; the 49-problem math set and possible training-data overlap cap confidence.
- **Context window: 95/100.** The verified 1M-token window falls in the methodology's 95–100 tier; no long-context retrieval result supports the 100-point ceiling.
- **Multimodal: 65/100.** Verified image input and text output fit the image-input band; no verified audio/video input or non-text output.
- **Coding: 95/100.** Exact-model Terminal-Bench 4.0 performance is strong, but no separately attributed SWE-bench or coding-leaderboard result was found.
- **Cost efficiency: 30/100.** The verified $10/$50 per-1M input/output price maps to the methodology's approximate $10/$50 tier; access is restricted and no free route was found.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions (92, 95, 95, 65, 95), excluding cost; best suited to verified users needing high-end agentic coding, research, and a 1M-token context, with image-only input and premium pricing as trade-offs.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, then source verification against Anthropic's model documentation, launch announcement, and system card. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
