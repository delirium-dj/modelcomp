# Claude Mythos 5.1 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's verification-required deployment of the same underlying model as Fable 5.1, with different safeguards for vetted cybersecurity and life-sciences users. This report retains the repository's separate deployment identity and does not silently substitute Fable benchmark results.
- **Provider / access:** Anthropic Claude API for approved organizations through trusted-access programs ([Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)).
- **Release / knowledge:** Announced September 2026; Anthropic lists June 2026 knowledge cutoff ([model documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)).
- **IDs:** `claude-mythos-5-1` on the Anthropic API; access requires verification.
- **Context window:** 1M tokens and 128K maximum output ([Anthropic documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)).
- **Modalities:** Text and image input, text output; adaptive reasoning and tool use supported.
- **Pricing (2026-11-01):** Anthropic $10 input / $0.25 cache read / $50 output per million tokens; verification remains a separate access requirement ([Anthropic documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)).
- **Architecture:** Proprietary; shares underlying weights with Fable 5.1 according to Anthropic, but differs in safeguards.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **60.9%**, specifically measured for Mythos 5.1 by Anthropic over 10 trials per task ([Anthropic announcement](https://www.anthropic.com/claude-fable-and-mythos-5-1); [system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20%26%20Claude%20Mythos%205.1%20System%20Card.pdf)).
- Tau2-Bench, Claw-Eval, MCP-Atlas and GDPval-AA: no verified Mythos-specific public score found in the sources used here.

Reasoning / knowledge:

- No separate verified GPQA, HLE, CritPt or long-context retrieval figure for the Mythos deployment found in this research. Fable results are related-model evidence, not substituted as Mythos measurements.

Coding:

- Terminal-Bench 4.0 **60.9%** above is also an agentic coding evaluation, not a conventional repository-only score.
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified Mythos-specific score found here.

Long context:

- Anthropic documents a 1M context; no Mythos-specific MRCR or RULER retrieval percentage verified here.

### Normalized scores (1–100)

- **Tool use: 96/100.** Anthropic's exact-deployment terminal result is strong; independent replication and broader tool evaluations were not verified.
- **Reasoning: 90/100.** Provisional estimate based on Anthropic's stated shared underlying model; lack of deployment-specific reasoning results caps confidence.
- **Context window: 95/100.** The documented 1M window earns the top size tier; no 98%+ retrieval result was verified.
- **Multimodal: 75/100.** Image/document input supported; audio/video input and non-text output are not credited.
- **Coding: 94/100.** The exact-deployment terminal result supports strong agentic coding, tempered by missing independent repository benchmarks.
- **Cost efficiency: 58/100.** $10/$50 API rates and restricted eligibility limit value for general use.
- **Overall Score: 90/100.** (96 + 90 + 95 + 75 + 94) / 5 = 90; applicable primarily to eligible verified users.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Exact Mythos results are distinguished from the related Fable deployment.
- Reference URLs:
  - [Anthropic release and deployment distinctions](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic Mythos API specifications](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Anthropic system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20%26%20Claude%20Mythos%205.1%20System%20Card.pdf)
- Future sources: add a new file next to this one using the same headings.
