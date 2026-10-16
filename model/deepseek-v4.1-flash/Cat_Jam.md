# DeepSeek V4.1 Flash — findings by Cat Jam

- Source: DeepSeek / DeepSeek V4.1 Flash (`opencode/deepseek-v4-1-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's Causal Encoder–Decoder MoE (552B total, 8B/16B active; 1M context; native text+image). Strong preference for long agentic coding at extreme low cost.
- **Provider / access:** DeepSeek API (`deepseek-flash`, alias from retired v4 variants), Alibaba Cloud Model Studio, OpenRouter, self-host open weights under DeepSeek license. Responses/OpenAI compatible.
- **Release / knowledge:** GA 2026-09-10 (release notes Sept 9); knowledge cutoff not explicitly published (likely mid-2026).
- **IDs:** `deepseek-v4.1-flash` (DS), OpenRouter `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,048,576 tokens; max output 393,216; chain-of-thought up to 393,216. (DeepSeek docs: recommendations max_tokens ≥256K).
- **Modalities:** Text + native image understanding (image + text input; text output). Tool calling, Responses API, FIM in non-thinking mode, JSON output. (No video/audio in sampled data.)
- **Pricing (as of 2026-10-16):** Smart off-peak/peak. Off-peak $0.15/$0.60 per 1M input/output, cache read $0.003; Peak $0.30/$1.20. Peak windows ~35h/week (Mon–Fri 01–04 & 06–10 UTC). Cache write 1x input.
- **Architecture:** Causal Encoder–Decoder MoE 552B; 8B input active / 16B output; 384 routed + 1 shared expert per layer (6 routed active); Engram 196B; CSA2; MX? Main KV FP4; 1/4 HBM cache; open weights under DeepSeek license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6**
- Terminal-Bench 3.0: 30.0
- Terminal-Bench 4.0: 31.2
- DeepSWE v1.1: **74.2**
- ProgramBench: 20.3
- NL2Repo-Bench: 65.4
- CyberGym: **88.1**
- SEC-Bench Pro: 62.8
- ExploitGym: 15.3
- Automation-Bench: 54.8
- Agents' Last Exam: 31.8
- Chartography (w/ tools): 78.9
- BabyVision (w/ tools): 89.6
- ZeroBench-main (w/ tools): 49.0
- MCP Atlas etc. no number in sampled source

Reasoning / knowledge:

- GPQA Diamond: **90.9** (DeepSeek changelog; API V4 Flash notes)
- HLE: 36.8 (39.1*, probably with search/extra) — changelog; 63.9 w/ tools
- MathArena Apex: 65.6
- Codeforces rating: 3471
- SimpleQA-Verified: 42.3
- MMLU-Pro: 74.1 (base model card)
- MultiLoKo: 45.5
- AA Intelligence Index (max effort): 39.5 (models.fru)
- ARC-AGI-2: 72.9% (models.fru, AA)
- HLE w/ tools: 63.9 (changelog)
- AA-LCR? not found in sampled source except none
- LiveBench Reasoning 81.1
- Epoch ECI 155.6

Coding:

- DeepSWE 74.2
- HumanEval 79.4
- BigCodeBench 60.6
- MATH 61.1
- LongBench-V2 45.2
- SWE/Repo? not explicitly; NL2Repo 65.4
- CV/DocVQA etc for multimodal
- CVBench 77.9, RefCOCO 86.0

Multimodal:

- MMMU-Pro 56.5
- CVBench 77.9
- DocVQA 95.6
- RefCOCO-avg 86.0
- BabyVision w/ tools 89.6
- ZeroBench 49.0 w/ tools

Long context:

- 1M context; LongBench-V2 45.2. (890 bytes/KV per token compression). No MRCR value found.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 90.6, CyberGym 88.1, AutomationBench 54.8, Agents' Last Exam 31.8, DeepSearchQA 95.0, Chartography 78.9. Strong coding/agent at ultra-low cost; weak on some terminal-harness agent tasks.
- **Reasoning: 84/100.** HLE 36.8 (63.9 w/tools), GPQA 90.9, MathArena 65.6, MMLU-Pro 74.1, Codeforces 3471, ARC-AGI-2 72.9; AA Intelligence 39.5 caps vs current leaders.
- **Context window: 93/100.** 1M context with extreme KV cache compression; LongBench-V2 45.2 caps retrieval (exact doc/needle tasks weaker).
- **Multimodal: 86/100.** Native image reasoning; MMMU-Pro 56.5, DocVQA 95.6, CVBench 77.9, BabyVision 89.6; no audio/video in sampled spec.
- **Coding: 90/100.** DeepSWE 74.2, HumanEval 79.4+, Terminal-Bench 2.1 90.6 but TB4 31.2 (harness/mode gap). Very strong cost-adjusted coding.
- **Cost efficiency: 98/100.** Off-peak $0.15/$0.60 per 1M with cache hit 90% off; open weights too. Best value in this queue.
- **Overall Score: 88/100.** Mean of (88 + 84 + 93 + 86 + 90) / 5 = 88.2. Exceptional price-performance; trails flagship-level reasoning slightly.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (DeepSeek release/changelog/model card, DeepSeek blog, Alibaba docs, OpenRouter, Bank of AI, models.fru); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
