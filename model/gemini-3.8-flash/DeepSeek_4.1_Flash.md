# Gemini 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (no "Free" wording; a free AI Studio tier exists with data-usage caveats)
- **Short description:** Google's September 2026 Flash-tier release and the fourth Flash generation in the Gemini 3 family. Google's own model card describes it as further-trained on top of Gemini 3.7 Flash rather than a new base model (the 3.8 card defers Architecture/Training/Hardware sections to the 3.7 card), and positions it as the most intelligent workhorse yet for long-horizon coding agents and document-heavy enterprise work.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI, Antigravity IDE and the consumer Gemini app. Proprietary, closed; no downloadable weights. A sibling Gemini 3.8 Flash Cyber ships alongside it for cybersecurity work.
- **Release / knowledge:** Released 2026-09-02.
- **IDs:** `gemini-3.8-flash` (Gemini API / Vertex). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens. Verified from Google's page as compiled by HokAI (checked 2026-09-04) and cross-checked against a second tracker (1M class).
- **Modalities:** text, image, video, audio and PDF input with tool calls; text + tool-call output; reasoning yes (thinking tokens bill as output). No media generation.
- **Pricing (as of 2026-09-18):** $0.75 / 1M in and $3.75 / 1M out through 2026 (doubling to $1.50 / $7.50 on 2027-01-01), cached input $0.075 / 1M. Batch and Flex APIs halve rates; Google AI Studio and unpaid quota are free but content may be used to improve Google products (EEA/Switzerland/UK users get paid-tier terms regardless). A second tracker lists the post-introductory $1.50 / $7.50 as the headline list price.
- **Architecture:** sparse Mixture-of-Experts transformer per Google's own model card; exact parameter counts undisclosed, consistent with every Gemini release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (vendor; compared in the same third-party table against GPT-5.6 Terra 87.4% and Claude Sonnet 5 80.4%) — the highest terminal-agent score found in this scan
- Tau3-Bench Banking: **38.1%** (up from 30.9% on 3.7 Flash)
- SWE-Atlas (Codebase QnA): **51.9%** (up from 48.0%)
- Vals Finance Agent v2: **61.4%** (vendor, described as leading)
- GDPval-AA v2: **1,140–1,421** reported across Gemini 3.5/3.6/3.8 material, with 3.8 material citing the highest end — treat the exact 3.8 value as unverified
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **95.4%** (Epoch AI via Model Beat)
- HLE: **47.8%** (Epoch AI via Model Beat) and HLE-Verified **54.9%** (Google's own model page) — two harnesses, both published
- SimpleQA Verified: **69.7%** (Epoch AI via Model Beat)
- AIME 2024/2025: **98.9%** (Epoch AI via Model Beat)
- Artificial Analysis Intelligence Index: **59** in high-reasoning mode
- CharXiv reasoning: **86.2%** (up from 84.5%)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (SimpleQA Verified 69.7% is the closest proxy)

Coding:

- SWE-bench Pro: **61.6%** (up from 60.4% on 3.7 Flash)
- DeepSWE v1.1: **minimum success rate above 70%** (Google model page; exact value not broken out for rivals)
- SciCode: **56.6%** (revised up from 53.6%)
- WebDev Arena: **1567 Elo** (Epoch AI via Model Beat)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found**
- Output speed: **327 tok/s** median (5th of 36 tracked models), but with a multi-second time to first token and higher output-token usage than peers

Long context:

- no GDM-MRCR or equivalent recall figure specific to 3.8 Flash was reproduced in the sources checked (Google publishes GDM-MRCR for 3.6 Flash at 91.8% @128K / 54.0% @1M), so the 1M window's recall at depth is not separately documented for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 92/100.** 90.8% on Terminal-Bench 2.1 — the best terminal-agent result in this scan — plus Tau3-Banking 38.1%, SWE-Atlas 51.9% and a leading finance-agent score; only the missing Claw/Toolathon results keep it off the top.
- **Reasoning: 93/100.** GPQA Diamond 95.4%, HLE 47.8–54.9% across two harnesses, AIME 98.9% and an AA Index of 59 place it at near-frontier reasoning for a Flash tier.
- **Context window: 92/100.** 1,048,576 tokens with 65,536 output and 90%-off caching; no model-specific recall-at-depth benchmark justifies a higher score, and the multi-second TTFT limits interactive use.
- **Multimodal: 86/100.** Text, image, video, audio and PDF input with CharXiv 86.2% document reasoning; text-only output and no vision-specialisation claims.
- **Coding: 90/100.** SWE-bench Pro 61.6%, DeepSWE above 70% and SciCode 56.6% are top-of-class for the price; the absent SWE-bench Verified number is the only significant gap.
- **Cost efficiency: 88/100.** $0.75/$3.75 with 50%-off batch/flex and $0.075 cached is outstanding value, but rates double in January 2027 and it burns more output tokens than peers on the same task.
- **Overall Score: 91/100.** (92 + 93 + 92 + 86 + 90 + 88) / 6 = 90.2 → **90**. Best fit: autonomous coding agents, terminal-based tasks and finance/document workflows where top-tier agentic scores are needed at Flash-tier prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google model page via HokAI, Epoch AI figures via Model Beat, third-party comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.