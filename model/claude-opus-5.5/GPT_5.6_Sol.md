# Claude Opus 5.5 — findings by ChatGPT 5.6 Sol

- Source: Anthropic/`claude-opus-5-5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 — paid; no OpenCode Zen Free ID.
- **Short description:** Anthropic’s proprietary adaptive-reasoning model for long-running agentic coding, complex knowledge work, and computer-use workflows. The canonical alias is `claude-opus-5-5`; it is not a free-tier variant.
- **Provider / access:** Anthropic Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, and paid OpenCode Zen `opencode/claude-opus-5-5`. Anthropic and Zen expose a Messages API rather than Chat Completions or Responses.
- **Release / knowledge:** 2026-09-22 release; reliable-knowledge and training-data cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5`; OpenCode Zen `opencode/claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; Google Cloud, Microsoft Foundry, and Claude Platform on AWS use `claude-opus-5-5`. No Free ID exists on Zen.
- **Context window:** 1,000,000 total tokens; 128,000-token standard maximum output, with 300,000-token batch output in beta. Verified in Anthropic’s model documentation.
- **Modalities:** Text, image, and PDF input; text output; adaptive reasoning always on; client/server tool calls and computer use; strict tool schemas and structured JSON output. No verified native audio/video input or non-text output.
- **Pricing (as of 2026-09-25):** Paid: $4 input, $20 output, $0.20 cached read, $5 five-minute cache write, and $8 one-hour cache write per 1M tokens; batch input/output is 50% off. No free Zen tier for this model; OpenCode states Anthropic API requests are retained for 30 days.
- **Architecture:** Proprietary, closed-weight model; total/active parameter counts, MoE status, and training architecture are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (BenchLM mirror of the independent Vals run; #1/73).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **1846 Elo** (Artificial Analysis v2.1, max effort; leaderboard leader).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** Toolathlon-Verified pass@1 (Anthropic system-card result); MCP-Atlas and SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **64.4%** without tools (Anthropic system-card harness, best verified BenchLM row); Artificial Analysis independently reports **61.4%** text-only at max effort.
- LCR / MLCR: **84.7%** AA-LCR v1.1 at max effort; MLCR: **no verified public score found**.
- CritPt: **31.7%** (Artificial Analysis, max effort).
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1 of 211** (Artificial Analysis v4.3.2, max effort/default fallback).
- Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (Artificial Analysis max-effort evaluation; corresponding non-hallucination rate 41.4%).

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified: **no verified public score found**; SWE-bench Pro: **89.9%** (Anthropic system-card result; #1/75 on BenchLM).
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis; #1 at publication).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **74.2%** DeepSWE (Anthropic system card, 1.2 points behind the best verified row); **87.6 / #1 of 135** BenchLM Coding category.

Long context:

- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 97/100.** Terminal-Bench 2.1 at 87.6% and GDPval-AA at 1846 Elo meet frontier bands, reinforced by 77.8% Toolathlon-Verified; missing Tau3 and the 48.7% strict OSWorld 2.0 result cap it below 100.
- **Reasoning: 95/100.** HLE reaches 64.4% without tools, AA-LCR is 84.7%, and the AA Intelligence Index ranks first; missing GPQA and the 31.7% CritPt result prevent a higher score.
- **Context window: 95/100.** Verified 1M-token total context earns the base ≥1M tier; no ≥98% retrieval result at 512K or longer was verified, so it does not receive 100.
- **Multimodal: 85/100.** Supports text, images, and PDFs as input with text output, but lacks verified native audio/video input and non-text generation.
- **Coding: 98/100.** SWE-bench Pro 89.9%, DeepSWE 74.2%, SciCode 66.9%, and Terminal-Bench 2.1 87.6% all reach frontier bands; absent SWE-bench Verified and LiveCodeBench results cap it below 100.
- **Cost efficiency: 55/100.** Standard evaluated-tier pricing is $4/$20 per 1M input/output tokens—more expensive than the methodology’s approximately $3/$15 = 60 reference point, despite inexpensive $0.20 cache reads.
- **Overall Score: 94.0/100.** Half-up mean of the five non-cost dimensions: (97 + 95 + 95 + 85 + 98) / 5 = 94.0. Best suited to premium long-running coding agents and document-heavy knowledge workflows where capability outweighs API cost.

---

## Signature

- Provided by: \*\*ChatGPT (openai/# Claude Opus 5.5 — findings by ChatGPT

- Source: Anthropic/`claude-opus-5-5`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 — paid; no OpenCode Zen Free ID.
- **Short description:** Anthropic’s proprietary adaptive-reasoning model for long-running agentic coding, complex knowledge work, and computer-use workflows. The canonical alias is `claude-opus-5-5`; it is not a free-tier variant.
- **Provider / access:** Anthropic Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, and paid OpenCode Zen `opencode/claude-opus-5-5`. Anthropic and Zen expose a Messages API rather than Chat Completions or Responses.
- **Release / knowledge:** 2026-09-22 release; reliable-knowledge and training-data cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5`; OpenCode Zen `opencode/claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; Google Cloud, Microsoft Foundry, and Claude Platform on AWS use `claude-opus-5-5`. No Free ID exists on Zen.
- **Context window:** 1,000,000 total tokens; 128,000-token standard maximum output, with 300,000-token batch output in beta. Verified in Anthropic’s model documentation.
- **Modalities:** Text, image, and PDF input; text output; adaptive reasoning always on; client/server tool calls and computer use; strict tool schemas and structured JSON output. No verified native audio/video input or non-text output.
- **Pricing (as of 2026-09-25):** Paid: $4 input, $20 output, $0.20 cached read, $5 five-minute cache write, and $8 one-hour cache write per 1M tokens; batch input/output is 50% off. No free Zen tier for this model; OpenCode states Anthropic API requests are retained for 30 days.
- **Architecture:** Proprietary, closed-weight model; total/active parameter counts, MoE status, and training architecture are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (BenchLM mirror of the independent Vals run; #1/73).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **1846 Elo** (Artificial Analysis v2.1, max effort; leaderboard leader).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** Toolathlon-Verified pass@1 (Anthropic system-card result); MCP-Atlas and SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **64.4%** without tools (Anthropic system-card harness, best verified BenchLM row); Artificial Analysis independently reports **61.4%** text-only at max effort.
- LCR / MLCR: **84.7%** AA-LCR v1.1 at max effort; MLCR: **no verified public score found**.
- CritPt: **31.7%** (Artificial Analysis, max effort).
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1 of 211** (Artificial Analysis v4.3.2, max effort/default fallback).
- Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (Artificial Analysis max-effort evaluation; corresponding non-hallucination rate 41.4%).

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified: **no verified public score found**; SWE-bench Pro: **89.9%** (Anthropic system-card result; #1/75 on BenchLM).
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **66.9%** (Artificial Analysis; #1 at publication).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **74.2%** DeepSWE (Anthropic system card, 1.2 points behind the best verified row); **87.6 / #1 of 135** BenchLM Coding category.

Long context:

- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 97/100.** Terminal-Bench 2.1 at 87.6% and GDPval-AA at 1846 Elo meet frontier bands, reinforced by 77.8% Toolathlon-Verified; missing Tau3 and the 48.7% strict OSWorld 2.0 result cap it below 100.
- **Reasoning: 95/100.** HLE reaches 64.4% without tools, AA-LCR is 84.7%, and the AA Intelligence Index ranks first; missing GPQA and the 31.7% CritPt result prevent a higher score.
- **Context window: 95/100.** Verified 1M-token total context earns the base ≥1M tier; no ≥98% retrieval result at 512K or longer was verified, so it does not receive 100.
- **Multimodal: 85/100.** Supports text, images, and PDFs as input with text output, but lacks verified native audio/video input and non-text generation.
- **Coding: 98/100.** SWE-bench Pro 89.9%, DeepSWE 74.2%, SciCode 66.9%, and Terminal-Bench 2.1 87.6% all reach frontier bands; absent SWE-bench Verified and LiveCodeBench results cap it below 100.
- **Cost efficiency: 55/100.** Standard evaluated-tier pricing is $4/$20 per 1M input/output tokens—more expensive than the methodology’s approximately $3/$15 = 60 reference point, despite inexpensive $0.20 cache reads.
- **Overall Score: 94.0/100.** Half-up mean of the five non-cost dimensions: (97 + 95 + 95 + 85 + 98) / 5 = 94.0. Best suited to premium long-running coding agents and document-heavy knowledge workflows where capability outweighs API cost.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-5.6-sol)** — 2026-09-25
- Method: Fresh public internet research using Anthropic documentation and system-card evidence, Artificial Analysis, BenchLM, and OpenCode Zen; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.)\*\* — 2026-09-25
- Method: Fresh public internet research using Anthropic documentation and system-card evidence, Artificial Analysis, BenchLM, and OpenCode Zen; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
