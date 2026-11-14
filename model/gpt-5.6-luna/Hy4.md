- Source: OpenAI/GPT-5.6 Luna
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** The lightweight, high-throughput tier of OpenAI's GPT-5.6 generation (Sol / Terra / Luna), announced 2026-06-27 and globally released 2026-07-09. Became ChatGPT's free-tier default in August 2026 with unlimited text chat and a "Think" button. A distinct model; GPT-6 Luna is a later, separate model.
- **Provider / access:** OpenAI API, ChatGPT free tier (default from 2026-08), GitHub Copilot integration; built for large-scale high-frequency task processing, tool calling and multi-step workflows.
- **Release / knowledge:** announced 2026-06-27, public 2026-07-09; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.6-luna` family ID as cited. No free Zen ID verified.
- **Context window:** **1,050,000 tokens** with **128,000 tokens** max output (the GPT-5.6 series article cites 1.5M for the generation — reported as a generation-level figure, not merged).
- **Modalities:** text in, text out; high-throughput chat, classification, agent subtasks, coding, computer operation; selectable "Think" higher-intensity reasoning mode. No verified image/audio/video input in the retrieved page.
- **Pricing (as of 2026-11-14):** after an **80% price cut** on 2026-07-30: **$0.20 / 1M input, $1.20 / 1M output** (down from $1 input). Free unlimited text chat on ChatGPT's free tier.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Improved prompt caching shared across the GPT-5.6 series.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.5%**
- Agents' Last Exam: reported to have overtaken Anthropic Claude Fable 5 (directional, no score)
- Fact accuracy: error rate **62% lower** than GPT-5.5 Instant (relative)
- Global call-volume ranking (early August 2026): **#8**, with **3.54 trillion tokens/week**, **+456%** week-over-week
- July 2026 industry comparison: advantages over Gemini 3.6 Flash on complex software engineering and knowledge-work tasks (directional)
- ExploitGym: cyber capability rises with reasoning effort (directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Think button enables higher-intensity reasoning (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench 2.1 **82.5%** as above; integrated into GitHub Copilot
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1.05M-token window with 128K max output and prompt caching; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** 82.5% Terminal-Bench 2.1, 3.54T weekly tokens at #8 globally, GitHub Copilot integration and a reported Agents' Last Exam win over Fable 5; capped by directional-only claims and no τ-bench/OSWorld figure.
- **Reasoning: 80/100.** A 62% fact-error reduction and an on-demand Think mode; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 90/100.** A 1.05M-token window with 128K output and improved prompt caching at an entry-tier price; capped by no long-context retrieval measurement.
- **Multimodal: 74/100.** Scored conservatively: the retrieved primary page documents text-based chat/agent work only, with no verified image/audio/video input for this tier.
- **Coding: 84/100.** 82.5% Terminal-Bench 2.1 and Copilot integration; capped by no SWE-bench / Terminal-Bench 4.0 figure.
- **Cost efficiency: 97/100.** $0.20/$1.20 per 1M after an 80% cut, plus free unlimited ChatGPT text chat — exceptional value at this capability level. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 86, 80, 90, 74, 84 = 82.8 → 83. Best fit: very high-volume chat, classification, extraction and agent subtasks; superseded by GPT-6 Luna for the same role.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.6 Luna article retrieved via public web search excerpt (release, 80% price cut, Terminal-Bench 2.1 82.5%, free-tier rollout, call-volume ranking, error-rate reduction), with the Baidu Baike OpenAI GPT-5.6 series excerpt and a secondary CSDN article for the 1.05M/128K context and the pre-cut $1 input price — labelled accordingly. Directional "overtook Fable 5" and "advantages over Gemini 3.6 Flash" claims are not assigned numeric scores. GPT-6 Luna is a separate later model, never merged here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GPT-5.6 Luna — 百度百科 (retrieved via search excerpt; pricing, benchmarks, rollout)](https://baike.baidu.com/item/GPT-5.6%20Luna/68076499)
  - [OpenAI GPT-5.6 — 百度百科 (retrieved via search excerpt; generation context window)](https://baike.baidu.com/item/OpenAI%20GPT-5.6/68624189)
