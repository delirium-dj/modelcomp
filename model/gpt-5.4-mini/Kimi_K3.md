# GPT-5.4 Mini — findings by Kimi K3

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's fastest/cheapest flagship-line mini: "our strongest mini model yet for coding, computer use, and subagents" (official model page). Mid-size reasoning variant of GPT-5.4 designed for high-volume workloads.
- **Provider / access:** OpenAI API, `gpt-5.4-mini` (Chat Completions + Responses; Batch supported; no Realtime/Assistants/fine-tuning). Responses-API tool surface includes function calling, web_search, file_search, code_interpreter, hosted_shell, computer_use, MCP.
- **Release / knowledge:** Released March 2026 (snapshot `gpt-5.4-mini-2026-03-17`); knowledge cutoff Aug 31, 2025. Note: Artificial Analysis marks the model "deprecated" for non-default workloads and points to GPT-5.6 Terra as the newer release.
- **IDs:** `gpt-5.4-mini` (default snapshot `gpt-5.4-mini-2026-03-17`). No Zen Free ID found (not listed on OpenCode Zen); scored on paid OpenAI pricing.
- **Context window:** 400,000 tokens total (max input 272,000; max output 128,000) — official OpenAI model docs.
- **Modalities:** Text + image in; text out. Reasoning yes (`reasoning.effort`: none default / low / medium / high / xhigh). Function calling + structured outputs + prompt caching; no audio or video input.
- **Pricing (as of 2026-10-02):** $0.75 / 1M input, $0.075 / 1M cached input, $4.50 / 1M output (official pricing table). No $0 tier. Artificial Analysis blended 7:2:1 ≈ $0.65/1M; measured $0.45 per Intelligence Index task.
- **Architecture:** Proprietary; parameter count not disclosed by OpenAI (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: no verified public score found for this exact model ID.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found as a standalone number (component of the AA Intelligence Index, below).
- AutomationBench-AA / computer use: vendor positioning only ("designed for computer use and subagents"); no public number.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found.
- Artificial Analysis Intelligence Index v4.3.2 (xhigh effort): **24** (#128 of 224 in class; class median 26; source: artificialanalysis.ai/models/gpt-5-4-mini, verified 2026-10-02).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
- Measured efficiency (AA, secondary metrics): 212.1 output tokens/s (#7/224, median 77); TTFT to first answer 123.46s; 230M output tokens over the Intelligence Index (very verbose).

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact model ID (Terminal-Bench 4.0 and SciCode run only inside AA's aggregate Index; individual values not published).

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 50/100.** No direct tool benchmark is public; the only verified aggregate (AA Index 24, includes AutomationBench-AA + GDPval-AA v2.1 + AA-Briefcase) sits below the class median, and vendor "computer use / subagents" claims are unquantified. Capped by the absence of Terminal-Bench / Tau3 / GDPval Elo numbers.
- **Reasoning: 56/100.** AA Intelligence Index 24 (xhigh) maps to the methodology's mid band (Index 20–35 → 55–65); below-median rank (#128/224) and no public GPQA/HLE/CritPt numbers keep it at the low end.
- **Context window: 70/100.** Verified 400K total (272K in / 128K out) — methodology's 200K–500K tier (65–84), mid-tier because no retrieval accuracy at depth is published and AA is no longer refreshing non-default workloads for this model.
- **Multimodal: 65/100.** Text + image in, text out (official docs) — methodology's "+image in = 60–70" band; no audio/video input and no non-text output.
- **Coding: 52/100.** No SWE-bench Verified / LiveCodeBench / SciCode public score exists; only vendor "strongest mini for coding" language plus the sub-median AA Index (which includes Terminal-Bench 4.0 and SciCode components). Provisional; capped by missing numbers.
- **Cost efficiency: 87/100.** $0.75 in / $0.075 cached / $4.50 out with a measured $0.45 per Index task — between the methodology's ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points. No free tier ($0 would be 100).
- **Overall Score: 59/100.** Half-up mean of (50 + 56 + 70 + 65 + 52) / 5 = 58.6 → 59. Best fit: cheap, fast (212 t/s) high-volume subagent/executor behind a stronger planner; not a frontier reasoner or verified coder.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-02
- Method: public internet research (platform.openai.com model page + pricing; artificialanalysis.ai model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
