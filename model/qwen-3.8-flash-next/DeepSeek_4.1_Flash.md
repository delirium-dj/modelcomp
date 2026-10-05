# Qwen3.8-Flash-Next — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud/Qwen (`qwen/qwen3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's open-weight sparse MoE "flash" release and an experimental preview of the forthcoming Qwen4 architecture; strongest at repository-level coding and long-horizon agentic work while staying cheap and locally runnable.
- **Provider / access:** Alibaba Cloud / Qwen Team. OpenRouter `qwen/qwen3.8-flash-next`; weights on Hugging Face `Qwen/Qwen3.8-Flash-Next`; free web chat with tools at chat.qwen.ai. Chat Completions-compatible API.
- **Release / knowledge:** Released 2026-08-26 (launch post `qwen.ai/blog?id=qwen3.8-flash-next`); knowledge cutoff not officially stated.
- **IDs:** `qwen/qwen3.8-flash-next` (OpenRouter / Qwen native); no OpenCode Zen Free ID verified.
- **Context window:** 262,144 tokens native, extensible to 1,048,576 (1M) via YaRN (per Qwen launch post / LLM Stats). Max output not officially broken out.
- **Modalities:** Text, image, and video in; text out. Reasoning model, tool calling, JSON/tool-call output. N-gram embedding table offloadable to system RAM.
- **Pricing (as of 2026-10-05):** $0.16 in / $0.016 cached / $0.47 out per 1M tokens (OpenRouter, BenchmarkList); free 1M-context web chat on chat.qwen.ai. A secondary review quotes $0.15/$0.47 — small tracker disagreement, benchmarklist's OpenRouter-linked figure used.
- **Architecture:** ~180B total parameters — 125B MoE backbone + 51B N-gram lookup table + 4B MTP module — with only ~6B activated per token. Open weights (community license; enterprise license required above 100M MAU).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (**Elo**, Artificial Analysis): **1,743** (rank 10/352, 97th pct)
- Tau3-Banking: **45.4%** (rank 10/176, 95th pct; field leader GLM-5.3 50.3%)
- AA-Briefcase: **1,583 Elo** (rank 10/145, 94th pct; rubric pass 54.1%)
- JobBench: **55.7%** (rank 11/48, 79th pct)
- AndroidWorld: **84.5%** (rank 6/22, 76th pct; field leader)
- ClawEval-MM: **64.4%** (rank 5/12, 64th pct)
- Toolathlon: **73.5%** (rank 17/41, 60th pct)
- Agents' Last Exam: **24.3%** (rank 23/41, 45th pct)
- CorpBench Work 1.3: **62.9** (rank 13/16, 20th pct)
- OSWorld2.0 (computer use): **19.4%** binary (rank 16/24, 35th pct)
- CoWorkBench: **73.9%** (SoftReviewed)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (rank 19/468, 96th pct)
- HLE: **38.0%** (rank 48/478, 90th pct)
- Artificial Analysis Intelligence Index: **39.8 / #56 of 427** (87th pct)
- AIIQ Composite IQ: **113 / #66 of 147** (55th pct)
- IFBench (instruction following): **81.3%** (rank 7/39, 84th pct)
- RealWorldQA: **88.5%** (rank 1/31, 100th pct)

Coding:

- LiveCodeBench (official, v6): **91.9%** (rank 3/50, 96th pct; field leader)
- SWE-bench Multilingual: **81.0%** (rank 8/49, 85th pct)
- SWE-bench Pro: **62.5%** (rank 20/58, 67th pct)
- Terminal-Bench 2.1: **86.1%** (rank 17/194, 92nd pct)
- SciCode: **50.6%** (rank 50/296, 83rd pct)
- DeepSWE 1.1: **58.7%** (rank 31/52, 41st pct; field leader Opus 5.5 74.2%)
- NL2Repo: **48.1%** (rank 15/34, 58th pct)
- Vision2Web: **64.0%** (rank 4/9, 63rd pct)
- WebDev Arena (Arena AI / LMArena): **1622.28 Elo** (rank 9/105, 92nd pct)

Long context:

- AA-LCR: **79.7%** (rank 49/408, 88th pct)

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1,743 and Tau3-Banking 45.4% are near the frontier band (frontier ≈1750 Elo / ~50%), and AndroidWorld 84.5% leads; capped by weaker long-horizon scores (Agents' Last Exam 24.3%, OSWorld2.0 19.4%, CorpBench 20th pct) and occasional JSON tool-call chaining quirks.
- **Reasoning: 78/100.** GPQA 92.3% clears the 90% frontier line and HLE 38.0% is just under the 40% mark, but the AA Intelligence Index 39.8 sits far below the 60+ frontier band and AIIQ IQ 113 is only mid-pack.
- **Context window: 84/100.** 262,144 native + 1M YaRN extension maps into the upper 200K–500K band with an extension bump; retrieval at 1M is unverified so it stops short of the ≥1M (95–100) tier.
- **Multimodal: 82/100.** Text/image/video in with text out (RealWorldQA #1, MathVision 90.6%, LVBench 76.6%, ERQA 72.3%, CharXiv-R 84.6%) places it in the +video band; no audio in or non-text out caps it.
- **Coding: 82/100.** LiveCodeBench 91.9% (#3, 96th pct) and Terminal-Bench 86.1% are frontier-class, but SWE-bench Pro 62.5% and DeepSWE 58.7% (41st pct) trail the 74% frontier DeepSWE reference, holding the composite back.
- **Cost efficiency: 90/100.** $0.16/$0.47 per 1M with a 1M-context free web tier is excellent value for the benchmark profile; free tier carries a data-use caveat and output price is above the ~$0.20 band that would score 97+.
- **Overall Score: 82/100.** Mean of (84 + 78 + 84 + 82 + 82) / 5 = 82.0 → **82**. Best-fit: budget open-weight agentic coding and long-repo refactoring where local/cheap inference matters more than absolute frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (Qwen launch post, BenchmarkList/Artificial Analysis aggregates, SoftReviewed review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
