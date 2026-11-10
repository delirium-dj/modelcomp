# Claude Opus 4.6 — findings by Iceman

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic’s Claude Opus 4.6 (released February 5, 2026) introduced adaptive thinking and 1M-token context (beta) for Opus-class coding, agentic, and knowledge work, with strong long-context retrieval and broad benchmark performance; now a legacy model.
- **Provider / access:** Anthropic Claude API `claude-opus-4-6`; available on Bedrock (InvokeModel), Google Cloud, Microsoft Foundry, and Claude Platform on AWS per platform docs. No confirmed OpenCode Zen Free ID (`noFreeId` in local metadata; trial quotas noted in metadata).
- **Release / knowledge:** Released February 5, 2026. Reliable knowledge cutoff May 2025; training data cutoff Aug 2025 (platform docs).
- **IDs:** `claude-opus-4-6`, `anthropic.claude-opus-4-6-v1` (Bedrock InvokeModel). Local metadata ID `anthropic/claude-opus-4.6`.
- **Context window:** 1M tokens context (beta, per announcement), 128K max output (300K batch beta supported per docs). Local metadata lists 200K in one field but docs/announcement indicate 1M; treated as 1M-capable per primary sources.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-10):** Paid tier — $5 / 1M input, $25 / 1M output (per docs/announcement); premium pricing may apply above 200k tokens for 1M context as noted in announcement.
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s Claude Opus 4.6 announcement and referenced benchmark descriptions. Some benchmark tables were image-based in the fetched page; only clearly stated numeric values in text are cited.

Agent / tool use:

- Terminal-Bench 2.0: stated as highest score (agentic coding) in announcement, but exact numeric value not clearly extractable from accessible text in this pass.
- BrowseComp: stated as leading all other frontier models (agentic search) in announcement; exact numeric value not clearly extracted.
- GDPval-AA: outperforms GPT-5.2 by ~144 Elo points and Opus 4.5 by ~190 Elo points (Anthropic announcement; absolute Elo not clearly extracted).
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas referenced in footnotes (62.7% at high effort noted), but primary table value not clearly extracted in this pass.

Reasoning / knowledge:

- Humanity's Last Exam: stated as leading all other frontier models in announcement; exact numeric value not clearly extracted from accessible text in this pass.
- ARC AGI 2: footnote states run with max effort and 120k thinking budget; numeric score not clearly extracted.
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: footnote notes 81.42% with a prompt modification (averaged over 25 trials) (Anthropic announcement footnotes).
- Terminal-Bench 2.0: highest score claimed; numeric value not clearly extracted.
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR v2 (8-needle 1M variant): **76%** (Anthropic announcement), compared to Sonnet 4.5 at 18.5%.

### Normalized scores (1–100)

> Derived from limited but verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 90/100.** Announcement positions Opus 4.6 as state-of-the-art across agentic coding, computer use, tool use, and search (including leading BrowseComp and strong GDPval-AA relative performance); capped by limited clearly extracted numeric benchmark values in this pass.
- **Reasoning: 91/100.** Claimed leadership on Humanity's Last Exam and strong expert reasoning/knowledge-work positioning support high reasoning; capped by sparse extracted numeric scores.
- **Context window: 93/100.** Verified 1M-context capability and strong long-context retrieval (MRCR v2 8-needle 1M 76%) indicate major context improvement; capped by beta/long-context pricing nuances and limited additional retrieval metrics.
- **Multimodal: 80/100.** Verified text+image input and text output with improved vision-related product positioning in the Claude 4.6 era; capped by lack of specific extracted multimodal benchmark numbers and limited modality breadth.
- **Coding: 91/100.** Verified SWE-bench Verified 81.42% (with prompt modification, per footnote) and state-of-the-art coding claims (e.g. Terminal-Bench 2.0) support strong coding; capped by few clearly extracted coding metrics.
- **Cost efficiency: 70/100.** Paid pricing ($5/$25 per 1M, premium above 200k for 1M context) is reasonable for a high-capability Opus model but not low-cost.
- **Overall Score: 89/100.** Mean of the five non-cost dims (90, 91, 93, 80, 91) = 89.0 → 89. Best fit as a capable legacy agentic coding/reasoning model with strong long-context retrieval, where newer Opus generations may offer better overall value.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement and platform docs; scores are normalized 1–100 interpretations from clearly stated verified figures/claims, with caps for limited extracted numerics.
- Reference URLs:
  - [Introducing Claude Opus 4.6 (Anthropic announcement)](https://www.anthropic.com/news/claude-opus-4-6)
  - [Claude Opus 4.6 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/opus-4-6/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
