# GPT-5.2 Codex — findings by Beam

- Source: OpenAI (`openai/gpt-5.2-codex`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's coding-specialized variant of GPT-5.2, released 2025-12-18 for agentic coding in Codex. Native compaction across multiple context windows, vision for screenshots/diagrams, stronger cybersecurity. Discontinued in the API on 2026-07-23 (replaced by gpt-5.6-sol).
- **Provider / access:** OpenAI Responses API only (`openai/gpt-5.2-codex`); not Chat Completions or Batch. Also Azure OpenAI / Microsoft Foundry. Codex CLI/IDE default for ChatGPT-signed-in users.
- **Release / knowledge:** 2025-12-18 release (OpenAI). Knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.2-codex` (paid; no Free ID; API removed 2026-07-23).
- **Context window:** 400,000 tokens total (272,000 max input); 128,000 max output (omcircle).
- **Modalities:** Text and image input; text output. Always thinks first (reasoning: low/medium/high/xhigh). Tool calls, web search, hosted shell, skills, structured outputs, streaming, prompt caching.
- **Pricing (as of 2026-10-22):** $1.75 / 1M input (omcircle, launch). Output price not separately published in sources reviewed; GPT-5.2 family lists $14.00 / 1M output (provisional — treat as unverified for this ID).
- **Architecture:** Proprietary (GPT-5.2 base, further optimized for agentic coding; native compaction across context windows).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **64.0%** (OpenAI announcement, GPT-5.2-Codex)
- OSWorld-Verified: **38.2%** (OpenAI, cited in GPT-5.3-Codex announcement at xhigh — attribution to 5.2-Codex unconfirmed)
- GDPval-AA / Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MMLU / MMLU Pro: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- LCR / MRCR: no long-context retrieval percentage published

Coding:

- SWE-bench Pro (Public): **56.4%** (OpenAI announcement, GPT-5.2-Codex)
- SWE-bench Verified: **72.80%** (official SWE-bench leaderboard, Bash Only, mini-SWE-agent)
- SWE-Lancer IC Diamond: **76.0%** (OpenAI, cited in GPT-5.3-Codex announcement — attribution to 5.2-Codex unconfirmed)
- Professional CTF (cybersecurity): **67.4%** (OpenAI, cited in GPT-5.3-Codex announcement — attribution unconfirmed)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 400,000 token context window with native compaction across multiple windows; no per-length retrieval percentage published.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 64.0% shows solid agentic terminal capability; capped by no Tau-bench / GDPval / Claw-Eval coverage.
- **Reasoning: 60/100.** No published GPQA/HLE/AA Index for this ID; scored conservatively on coding-focused reasoning evidence (SWE-bench Pro 56.4%). Capped by missing reasoning benchmarks.
- **Context window: 85/100.** 400K window with native compaction; scored below 90 because no retrieval measurement published.
- **Multimodal: 65/100.** Text + image in, text out; vision for screenshots/diagrams. Capped at text-out only and no audio/video.
- **Coding: 72/100.** Solid coding (SWE-bench Pro 56.4%, SWE-bench Verified 72.80%, Terminal-Bench 2.0 64.0%). Capped by no LiveCodeBench / SciCode / DeepSWE exacts.
- **Cost efficiency: 80/100.** Low input price ($1.75 / 1M) but high output price ($14.00 / 1M provisional); good value for coding workloads.
- **Overall Score: 70/100.** Mean of five non-cost dims (68 + 60 + 85 + 65 + 72) / 5 = 70.0 → 70. Best fit for agentic coding in repositories with large context and vision needs (note: API removed 2026-07-23; successor gpt-5.6-sol).

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-22
- Method: public internet research (Omcircle model page, OpenAI announcement via omcircle, SWE-bench leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.