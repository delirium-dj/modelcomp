# Claude Mythos 5.1 — findings by ChatGPT 5.6 Luna

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 — Invite only
- **Short description:** Anthropic’s Mythos 5.1 is a trusted-access variant of the same underlying model as Claude Fable 5.1, with fewer safeguards for vetted cybersecurity and life-sciences research. It is intended for advanced cyberdefense, vulnerability research, scientific research, and related high-risk professional workloads.
- **Provider / access:** Anthropic Claude API `claude-mythos-5-1`; Amazon Bedrock `anthropic.claude-mythos-5-1`; Google Cloud `claude-mythos-5-1`; Microsoft Foundry `claude-mythos-5-1`; Claude Messages API, not OpenAI Chat Completions/Responses. Invite-only through Anthropic trusted-access programs / Project Glasswing. No verified OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-01 release; reliable/training data cutoff June 2026. Source: Anthropic Claude Platform Docs.
- **IDs:** `anthropic/claude-mythos-5-1`; API IDs `claude-mythos-5-1` / `anthropic.claude-mythos-5-1` on Bedrock. No verified OpenCode Zen Free ID found.
- **Context window:** 1M tokens; max output 128K. Verified directly in Anthropic Claude Platform Docs.
- **Modalities:** text + image in; text out; adaptive reasoning/thinking always on; tool calls supported; structured outputs supported. No verified public audio/video input or non-text output. Forced `tool_choice: any` / `tool` is not supported on Mythos 5.1; use automatic tool choice with strict tool use or structured outputs. Source: Anthropic Claude Platform Docs.
- **Pricing (as of 2026-10-01):** $10 / 1M input tokens; $50 / 1M output tokens; 5m cache write $12.50 / 1M; 1h cache write $20 / 1M; cache read $0.25 / 1M; Batch API 50% discount on input/output. Invite-only, no verified free tier. Anthropic states Mythos 5.1 uses a 30-day data-retention policy by default for safety monitoring.
- **Architecture:** Proprietary closed model; no public parameter count, active-parameter count, MoE disclosure, or open-weights license verified. Anthropic states Mythos 5.1 and Fable 5.1 are the same underlying model with different safeguards.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **77.0% correct / 20.0% incorrect, 2.0% abstained** (BenchmarkList; AA-Omniscience; rank 2/7, 83rd percentile; source dated 2026-09-01 system card)
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **60.9% Terminal-Bench 4.0** (Anthropic system card / official launch results; rank 1/10 on BenchmarkList; max thinking)
  Long context:
- **no long-context retrieval reported**; verified advertised context is 1M tokens, but no exact-model MRCR/RULER/GraphWalks retrieval measurement was found.

### Normalized scores (1-100)

- **Tool use: 70/100.** Exact-model Terminal-Bench 4.0 is 60.9% (rank 1/10), but no verified Terminal-Bench 2.1, Tau3, GDPval-AA, OSWorld, or AutomationBench result was found for Mythos 5.1; score is therefore capped at the upper-middle range rather than treated as a fully verified frontier tool-use score.
- **Reasoning: 75/100.** Exact-model evidence includes AA-Omniscience at 77.0% correct / 20.0% incorrect and ArxivMath at 93.9% with tools, both reported for Mythos 5.1 by BenchmarkList/system-card data. No verified GPQA Diamond, HLE, LCR/MLCR, CritPt, or Artificial Analysis/BenchLM overall score was found, capping confidence in a frontier reasoning score.
- **Context window: 95/100.** Verified 1M-token context places Mythos 5.1 in the >=1M tier, but no verified MRCR/RULER-style retrieval result at 512K+ was found, so it does not qualify for the 100-point retrieval-qualified ceiling.
- **Multimodal: 65/100.** Verified text + image input with text output; no verified public audio/video input or non-text output. Per the supplied mapping, image input falls in the 60-70 band.
- **Coding: 70/100.** Exact-model Terminal-Bench 4.0 is 60.9%, rank 1/10, providing direct coding-agent evidence. No verified SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, DeepSWE, or Terminal-Bench 2.1 result was found; the score is therefore limited by missing benchmark coverage despite the strong TB4.0 result.
- **Cost efficiency: 30/100.** $10 input / $50 output per 1M tokens maps to the supplied ~$10/$50 cost-efficiency tier; cache reads are substantially cheaper at $0.25/M but do not change the primary evaluated-tier price mapping.
- **Overall Score: 75/100.** Mean of Tool use 70 + Reasoning 75 + Context window 95 + Multimodal 65 + Coding 70; best fit is vetted cybersecurity and life-sciences agentic research where its specialized access and reduced safeguards are explicitly intended.

---

### Deep-research addendum (2026-10-09)

- Anthropic’s launch coverage identifies Mythos 5.1 as a restricted model for trusted-access cybersecurity and life-science work rather than a general public endpoint.
- The official announcement provides comparative benchmark material for the Fable 5.1/Mythos 5.1 release, but does not expose every Mythos 5.1 row as machine-readable text; no unsupported score is added here.
- Source: https://www.anthropic.com/claude-fable-and-mythos-5-1

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s docs confirm 1M context, 128K output, $10/$50 pricing, and that Mythos 5.1 is the same underlying model as Fable 5.1 with different safeguards. The system-card lineage and launch announcement emphasize cybersecurity/biology specialization and restricted access.
- Recalculation: **retained 75.0/100**. The new evidence clarifies model identity and safeguards but does not fill the missing exact-model tool, reasoning, or multimodal evaluations.
- Sources: https://platform.claude.com/docs/en/models/mythos-5-1/overview ; https://www.anthropic.com/claude/mythos ; https://www.anthropic.com/claude-fable-and-mythos-5-1

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-01
- Method: public internet research limited to verifiable first-party Anthropic documentation and permitted benchmark directories; exact-model results were kept separate from Fable 5.1 results even where Anthropic states the underlying model is shared. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
