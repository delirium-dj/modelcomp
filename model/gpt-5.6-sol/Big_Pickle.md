# GPT-5.6 Sol — findings by Big Pickle

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship tier in the GPT-5.6 family — its strongest model for complex reasoning, advanced agentic coding, computer use, cybersecurity, and long-horizon professional work. Released GA on 2026-07-09 after a vetted-partner preview (June 26); state of the art on Terminal-Bench 2.1, DeepSWE, and the Artificial Analysis Coding Agent Index, at roughly one-third the cost of Claude Fable 5 on comparable tasks.
- **Provider / access:** OpenAI (API, Codex, ChatGPT; also on Cerebras up to ~750 tokens/s for select customers). Proprietary, API-only, no open weights.
- **Release / knowledge:** Released 2026-07-09 (preview from 2026-06-26). Knowledge cutoff February 16, 2026. General availability onward; pricing promo drop on 2026-08-21.
- **IDs:** `gpt-5.6-sol` (the `gpt-5.6` alias also routes to Sol).
- **Context window:** 1,050,000 token input; 128,000 token max output. Long-context tier (>272K input) bills at 2x input / 1.5x output for the whole request; 1.1M hours-long context is a marketing ceiling, not a target.
- **Modalities:** text and images input; text output. Broad Responses API tool support, Programmatic Tool Calling, computer use; multi-agent `ultra` mode (beta) and `max` reasoning effort.
- **Pricing (as of 2026-09-20):** promotional $4.00 input / $0.40 cached input / $20.00 output per 1M tokens (from $5/$0.50/$30 at launch; promo valid at least through 2026-11-21). Cache writes 1.25x input; batch/flex 50% off short context. Reasoning effort: none, low, medium (default), high, xhigh, max, and `ultra` multi-agent.
- **Architecture:** Undisclosed (GPT-5.6 family); ~1.1M window; strong token efficiency — fewer output tokens per task than comparable frontier models, ~15K tokens per AA Intelligence Index task.

### Raw benchmarks found

Agent / tool use (OpenAI official launch + AA tables unless noted):

- Artificial Analysis Coding Agent Index v1.1: **80** (Sol, max, Codex harness) — new state of the art, +2.8 over Claude Fable 5 (77.2), using less than half the output tokens, under half the time, at ~1/3 the cost. Terra 77.4 / Luna 74.6.
- Terminal-Bench 2.1: **88.8%** (Sol), **91.9%** (Sol Ultra); GPT-5.5 85.6%, Fable 5 83.1%, Opus 4.8 78.9% — beats GPT-5.5's 85.6%, only trailed in OpenAI's table by Mythos 5's 88%.
- DeepSWE v1.1: **72.7%** — SOTA; GPT-5.5 67.0%, Fable 5 69.7%, Opus 4.8 59.0%.
- SWE-Bench Pro: **64.6%** — improves on GPT-5.5 (59.4%) but trails Fable 5 (80.0%) by a wide margin.
- OSWorld 2.0: **62.6%** — surpasses Opus 4.8 (54.8%) using 85% fewer output tokens; GPT-5.5 47.5%.
- BrowseComp: **90.4%** (Sol), **92.2%** (Sol Ultra); GPT-5.5 84.4%, Fable 5 84.3%.
- BenchCAD: **70.6%**; BenchCAD (python tool) **83.4%** (vs GPT-5.5 44.4%/55.8%).
- MCP Atlas: **81.8%** (third-party, Benchgen).
- Cybersecurity (OpenAI system card): ExploitBench 2 **73.5%** (vs GPT-5.5 47.9%); ExploitGym 3 peak pass rate **24.9%** under 2h (GPT-5.5 15.1%), **33.7%** at 6h; SEC-Bench Pro **71.2%** (vs 45.8%).

Reasoning / knowledge:

- Agents' Last Exam: **53.6** (promo page) / **52.7%** (launch table) — eclipses Fable 5 (40.5) by 13.1 points; even at medium effort beats it by 11.4 points at ~1/4 the cost.
- Artificial Analysis Intelligence Index v4.1: **58.9** (Sol max) — within 1 point of Fable 5 (59.9) while completing tasks in 61% less time at ~1/3 the cost ($1.04/task vs ~$3 for Fable 5).
- GDPval-AA v2: **1,747.8 Elo** (vs GPT-5.5 1,493.7).
- GPQA Diamond **94.6%**; ARC-AGI-1 **97.5%**; AIME 2026 **99.9%**; SimpleQA **71.6%**; Big Finance Bench **53%**; Management Consulting Tasks **43.2%**.

Computer use / long context (OpenAI launch table):

- OpenAI MRCR v2 8-needle 256K-512K: **91.5%**; 512K-1M: **73.8%**.
- GraphWalks BFS 256K f1: **90.7%**; 1M f1: **77.1%**.

### Normalized scores (1–100)

- **Tool use: 88/100.** AA Coding Agent Index 80 (SOTA), Terminal-Bench 2.1 88.8%, BrowseComp 90.4%, OSWorld 62.6%, ExploitBench 2 73.5%, MCP Atlas 81.8% — the widest and most consistently best tool-use package of any model in this comparison.
- **Reasoning: 86/100.** Agents' Last Exam 53.6 (SOTA), AA Intelligence Index 58.9 (within 1 of Fable 5 at a third of the cost), GPQA 94.6%, ARC-AGI 97.5%, GDPval 1,748 Elo.
- **Context window: 85/100.** A real 1.05M window with 128K output and the top long-context suite in its family (MRCR 91.5% at 256K-512K, GraphWalks 1M f1 77.1%); docked for the 272K-token 2x/1.5x long-context price break and hard ceiling guidance.
- **Multimodal: 78/100.** Text + image input and text output only (no audio/video), but BenchCAD 83.4% (python tool) shows best-in-class vision-to-code strength.
- **Coding: 90/100.** The strongest coding story in this comparison — Coding Agent Index 80 (SOTA), Terminal-Bench 2.1 88.8%, DeepSWE 72.7% SOTA, token-efficient — though SWE-Bench Pro 64.6% confirms Fable 5 (80.0%) still owns that classic repository benchmark.
- **Cost efficiency: 80/100.** Promo $4/$20 with $0.40 cached input and ~$1.04 per Intelligence Index task (roughly 1/3 of Fable 5's cost); long-context >272K input at 2x/1.5x and expensive max/ultra modes (incl. GPU-heavy) erode the headline.
- **Overall Score: 85/100.** Mean of the five quality dims (88+86+85+78+90)/5 = 85.4. OpenAI's flagship gives the best all-around tool-use, coding, and long-context package in the set — a genuine frontier model with SOTA results on the modern agentic suites and only narrow, benchmark-specific losses.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (openai.com GPT-5.6 launch + preview pages, developers.openai.com model docs, artificialanalysis.ai, benchgen.com, llm-stats.com, ai-tldr.dev, coursiv.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.