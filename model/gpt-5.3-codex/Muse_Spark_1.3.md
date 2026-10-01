# GPT-5.3 Codex — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.3-Codex (`gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's most capable agentic coding model (Feb 2026): merges GPT-5.2-Codex frontier coding with GPT-5.2 reasoning/professional knowledge, ~25% faster; built for long-running research + tool-use + execution with mid-task steering.
- **Provider / access:** OpenAI Codex surfaces (app, CLI, IDE extension, web) with paid ChatGPT plans; OpenAI API `gpt-5.3-codex` (low/medium/high/xhigh reasoning effort; API access rolling out after Codex-first launch). OpenCode Zen `opencode/gpt-5.3-codex`.
- **Release / knowledge:** Released 2026-02-05 (OpenAI launch post + system card). Knowledge cutoff Aug 31, 2025 (OpenAI API docs + ai-tldr version table).
- **IDs:** `gpt-5.3-codex` (OpenAI API); `opencode/gpt-5.3-codex` (Zen catalogue / meta.json)
- **Context window:** 400,000 total with 128,000 max output — verified via OpenAI API docs pricing/context row and ai-tldr version table
- **Modalities:** Text and vision in; text out; reasoning yes (xhigh flagship effort; all launch evals run at xhigh); tool calls yes (terminal, repo search, research tools; fewer tokens than any prior model per OpenAI)
- **Pricing (as of 2026-10-01):** $1.75 per 1M input / $14.00 per 1M output; cached input $0.175 (OpenAI docs + ai-tldr pricing table). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary coding-specialized system (undisclosed parameters; first OpenAI model rated High capability for cybersecurity, CTF 77.6%)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** xhigh (OpenAI launch post: far exceeds prior SOTA with fewer tokens; ai-tldr benchmark list confirms)
- OSWorld-Verified: **64.7%** xhigh (ai-tldr benchmark list, OpenAI-reported — strong computer-use)
- GDPval win-or-tie rate: **70.9%** xhigh (ai-tldr benchmark list, OpenAI-reported)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** xhigh (writingmate.ai benchmark table, OpenAI provider-reported; vectorwire AA-aggregator 91.52% and verdictpal verified 91.5% #30/190 alongside — same band)
- Artificial Analysis Intelligence Index: **46** xhigh (artificialanalysis.ai comparison page, v4.1.1 composite over GDPval-AA/Tau3/TB2.1/SciCode/HLE/GPQA/CritPt/Omniscience/LCR — aggregator-compiled, provisional)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-Bench Pro (public, 731 tasks): **56.8%** xhigh industry high (OpenAI launch post + writingmate 731-task methodology row; vs 56.4%/55.6% priors in launch chart)
- Cybersecurity CTF: **77.6%** (ai-tldr benchmark list, OpenAI-reported; High-capability Preparedness Framework rating)
- SWE-bench Verified: **no verified public score found** (Verified is Python-only; Pro is the reported contamination-resistant suite — no transfer)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** (inside AA Index composite only, no standalone Codex number)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 400K/128K are documented ceilings only (mid-task steering without losing context is a product claim, not a retrieval measurement)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.0 77.3% (industry high, token-efficient) plus OSWorld-Verified 64.7% and GDPval 70.9% show elite terminal/computer-use agency; capped by missing Tau/Claw/MCP harnesses.
- **Reasoning: 88/100.** GPQA 92.6% xhigh clears the 90%+ frontier line with AA Index 46 supporting breadth (GPT-5.2 knowledge merged in); capped by missing HLE/LCR/CritPt/Omniscience.
- **Context window: 80/100.** 400K total / 128K out at the upper end of the 200K-500K tier; capped by zero measured at-limit retrieval for this exact ID (no MRCR/RULER/GraphWalks transfer from 5.2).
- **Multimodal: 65/100.** Text + vision in to text out fits the +image-in 60-70 band middle; no MMMU/CharXiv number for this exact ID and no video/audio in or non-text out.
- **Coding: 92/100.** SWE-Bench Pro 56.8% industry high plus CTF 77.6% (High-capability) show frontier real-world engineering; capped by missing Verified/LiveCode/SciCode/Vibe/DeepSWE for this exact ID.
- **Cost efficiency: 60/100.** $1.75/$14.00 per 1M lands at the ~$3/$15 = ~60 tier on output weight (cache $0.175 softens); token-efficiency gains noted, still flagship-priced per token.
- **Overall Score: 83/100.** Mean of the five quality dims (90+88+80+65+92)/5 = 83.0; best fit as Feb-2026 frontier agentic coder for long-running repo work; pair with GPT-5.2 Thinking/Pro for max science reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex" post 2026-02-05 + system card + API docs page, ai-tldr.dev specs/benchmarks/pricing, writingmate.ai benchmark table, vectorwire.ai + verdictpal.com GPQA rows, artificialanalysis.ai comparison page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
