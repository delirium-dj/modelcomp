# GPT-5.4 nano — findings by Kimi K3

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's cheapest GPT-5.4-class model — "for simple high-volume tasks" (classification, data extraction, ranking, sub-agents per the official model page).
- **Provider / access:** OpenAI API, `gpt-5.4-nano` (Chat Completions + Responses; Batch supported; no Realtime/Assistants/fine-tuning/computer_use tool).
- **Release / knowledge:** Released March 17, 2026 (snapshot `gpt-5.4-nano-2026-03-17`); knowledge cutoff Aug 31, 2025. Artificial Analysis currently lists the model as deprecated and points to GPT-5.6 Luna as the newer release.
- **IDs:** `gpt-5.4-nano` (default snapshot `gpt-5.4-nano-2026-03-17`). No Zen Free ID found; scored on paid OpenAI pricing.
- **Context window:** 400,000 tokens total (max input 272,000; max output 128,000) — official OpenAI model docs.
- **Modalities:** Text + image in; text out. Reasoning yes (`reasoning.effort`: none default / low / medium / high / xhigh). Function calling + structured outputs + prompt caching; supported tools: function_calling, web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, mcp (no computer_use).
- **Pricing (as of 2026-10-02):** $0.20 / 1M input, $0.02 / 1M cached input, $1.25 / 1M output (official pricing table). No $0 tier. Artificial Analysis blended ≈ $0.18/1M and measured $0.18 per Intelligence Index task.
- **Architecture:** Proprietary; parameter count not disclosed by OpenAI (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: no verified public score found for this exact model ID.
- Tau3-Banking / Tau2-Bench / GDPval-AA (standalone) / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found.
- Artificial Analysis Intelligence Index v4.3.2 (xhigh effort): **21** (#42 of 175 in its class, class median 12 — well above average for the tier; source: artificialanalysis.ai/models/gpt-5-4-nano, verified 2026-10-02).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
- Measured efficiency (AA, secondary metrics): 163.8 output tokens/s (#31/175); TTFT to first answer 80.29s; 190M output tokens over the Intelligence Index (verbose).

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found (Terminal-Bench 4.0 and SciCode run only inside AA's aggregate Index; individual values not published, and the vendor positions nano for non-coding high-volume work).

Long context:

- No MRCR / RULER / GraphWalks retrieval numbers published — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 45/100.** No direct tool benchmark is public; vendor positioning (classification/extraction/sub-agents) plus a below-the-frontier AA Index (21) are the only signals. Capped by the absence of Terminal-Bench / Tau3 / GDPval numbers and the lack of computer_use support on this ID.
- **Reasoning: 55/100.** AA Intelligence Index 21 (xhigh) sits at the bottom of the methodology's mid band (Index 20–35 → 55–65); strong within its $-tier (median 12) but no public GPQA/HLE/CritPt numbers.
- **Context window: 70/100.** Verified 400K total (272K in / 128K out) — methodology's 200K–500K tier (65–84); no published retrieval accuracy at depth.
- **Multimodal: 65/100.** Text + image in, text out (official docs) — methodology's "+image in = 60–70" band.
- **Coding: 45/100.** No public coding benchmark exists for this ID; vendor does not position nano for coding (that phrase is reserved for the Mini), and the aggregate Index is weakly below the Mini's 24. Provisional; capped by missing numbers.
- **Cost efficiency: 94/100.** $0.20 in / $0.02 cached / $1.25 out, measured $0.18 per Index task — close to the methodology's "$0.10/$0.20 = 97–99" reference, slightly discounted for the pricier output side. No free tier.
- **Overall Score: 56/100.** Half-up mean of (45 + 55 + 70 + 65 + 45) / 5 = 56.0 → 56. Best fit: ultra-cheap high-volume router/classifier/extractor behind a stronger planner or coding model.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-02
- Method: public internet research (platform.openai.com model page + pricing; artificialanalysis.ai model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
