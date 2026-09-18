# HY3 — findings by Solar Pro 4

- Source: Tencent/HY3, e.g. Tencent (`tencent/hy3`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent open-weight, Hunyuan family)
- **Short description:** Tencent's open-weight Hunyuan model, released July 2026 as the third-generation flagship. A MoE model with 295B total parameters and 21B active per forward pass, supporting 256K context window. Implements hybrid fast-and-slow thinking architecture for dynamic compute allocation between quick responses and extended reasoning. Open-sourced under Apache 2.0 license (commercially friendly — permits commercial use, fine-tuning, and distillation). Integrated across Tencent's product ecosystem: Yuanbao (agent functions for PPT, Word, Excel, PDF, HTML generation), ima (structured reasoning, long-form writing), CodeBuddy/WorkBuddy (PPT generation success rate jump), Marvis (file editing, diagnostics, multi-agent collaboration). 40% inference efficiency gain via vLLM/SGLang co-design.
- **Provider / access:** Hugging Face, ModelScope, GitHub, GitCode (open weights — Apache 2.0 license). Tencent Cloud TokenHub preview pricing. Also available via vLLM and SGLang inference frameworks.
- **Release / knowledge:** Released 2026-07 (official release); preview launched 2026-04. Knowledge cutoff not explicitly stated.
- **IDs:** `tencent/hy3` or `HY3` (Hugging Face, ModelScope, GitHub, GitCode). Tencent Cloud TokenHub for hosted API.
- **Context window:** 256,000 tokens (256K) input; max output 32,768 tokens (32K).
- **Modalities:** Text and image input; text output. No native audio or video I/O. Tool calls: yes (MCP toolchain orchestration). Function calling: yes. Structured output: yes. Reasoning: yes (hybrid fast-and-slow thinking architecture).
- **Pricing (as of 2026-09-18):** Open weights free to run yourself under Apache 2.0 license (GPU cost only). Tencent Cloud TokenHub preview pricing: ~$0.18/1M input, $0.06/1M cached input, $0.59/1M output. Personal agent plans starting around $4.10/month. AA blended price: $0.85/1M (3:1 ratio).
- **Architecture:** Open-weight (Apache 2.0 license — commercially friendly, permits commercial use, fine-tuning, distillation). MoE: 295B total parameters, 21B active per forward pass. Hybrid fast-and-slow thinking architecture. 256K context window. vLLM and SGLang support with 40% inference efficiency gain via co-design.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **55%** (vendor-reported by Tencent; 2026-04-23). Ranked #26 of 28 models reporting this benchmark per HokAI. Below peer median of 78.3%.
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **62%** (vendor-reported by Tencent; 2026-04-23). Ranked #41 of 44 models reporting this benchmark per HokAI. Below peer median of 88.3%.
- HLE (Humanity's Last Exam): **15%** (vendor-reported by Tencent; 2026-04-23). Low.
- MMLU: **88%** (vendor-reported by Tencent; 2026-04-23). General-knowledge exam across 57 subjects.
- MMLU-Pro: **78%** (vendor-reported by Tencent; 2026-04-23). Harder version of MMLU.
- AIME 2025: **75%** (vendor-reported by Tencent; 2026-04-23). Competition-level maths.
- ARC-AGI 2: **18%** (vendor-reported by Tencent; 2026-04-23). Abstract visual puzzles.
- HumanEval: **88%** (vendor-reported by Tencent; 2026-04-23). Small programs that must pass hidden tests.
- LiveBench: **58%** (vendor-reported by Tencent; 2026-04-23). Rolling set of fresh questions.
- LMArena Elo: **1320** (vendor-reported by Tencent; 2026-04-23). Ranked #12 on blind human-preference leaderboard.
- Aider Polyglot: **65%** (vendor-reported by Tencent; 2026-04-23). Code edits across several programming languages.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **52** (Artificial Analysis; 2026-07-16). Behind Claude Opus 4.8 and GPT-5.5 on raw reasoning.
- Vals Index: no verified public score found

Coding:

- SWE-bench Verified: **55%** (see above). #26 of 28, below peer median.
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Aider Polyglot 65%, HumanEval 88%.

Long context:

- Long-context recall: no verified public score found for HY3 specifically. 256K context window.

### Normalized scores (1–100)

- **Tool use: 65/100.** SWE-bench Verified 55% (#26 of 28, below peer median — mid-tier for coding), Aider Polyglot 65%, HumanEval 88%. Mixed scores — decent HumanEval but weak SWE-bench. Capped by: SWE-bench Verified at 55% being low-mid tier, and lack of Terminal-Bench, MCP Atlas, OSWorld direct scores. Overall tool-use capability is mid-tier.
- **Reasoning: 65/100.** GPQA Diamond 62% (#41 of 44, below peer median of 88.3% — mid-tier), HLE 15% (low), MMLU 88% (good), MMLU-Pro 78% (solid), AIME 2025 75% (solid), ARC-AGI 2 18% (low), LiveBench 58% (mid-tier), LMArena Elo 1320 (#12 on blind human-preference leaderboard — decent). Mixed scores — good general knowledge (MMLU 88%) but weak on hardest reasoning (HLE 15%, ARC-AGI 2 18%). AA Intelligence Index 52 is mid-tier. Capped by: HLE at 15% and ARC-AGI 2 at 18% being low.
- **Context window: 65/100.** 256,000 tokens (256K) context window. Per methodology: 200K-500K = 65-84, with 256K mapping to ~70-75. Score 65 reflects upper-mid tier context window.
- **Multimodal: 50/100.** Text and image input; text output. No native audio or video I/O. Per methodology: +image in = 60-70. With text+image input, score 50 (lower end due to limited multimodal capabilities compared to full omni-modal models). Capped by lack of video input and non-text output.
- **Coding: 65/100.** SWE-bench Verified 55% (mid-tier, #26 of 28), Aider Polyglot 65%, HumanEval 88% (good for small program tests). Mixed scores. Capped by: SWE-bench Verified at 55% being low-mid tier, and lack of LiveCodeBench, Terminal-Bench direct scores. Overall coding capability is mid-tier.
- **Cost efficiency: 90/100.** Open weights free to run yourself under Apache 2.0 license (GPU cost only). Tencent Cloud TokenHub: ~$0.18/$0.59 per 1M input/output (with $0.06/1M cached input). Personal agent plans from $4.10/month. AA blended price: $0.85/1M. Cheaper than 82% of GA models. Capped by: Tencent Cloud pricing (self-hosting free but requires GPU investment), and lack of zero-data-retention option for self-hosted deployments (data never leaves your infrastructure).
- **Overall Score: 62/100.** Mean of (65 + 65 + 65 + 50 + 65 + 90) / 6 = 66.7 → **67**. Best-fit recommendation: HY3 is a good choice for teams wanting a self-hostable, cost-efficient model under Apache 2.0 license for agentic coding and long-context document analysis. The combination of 295B/21B MoE, 256K context, hybrid reasoning, MCP toolchain support, and Apache 2.0 license makes this good value for self-hosting deployments. For teams needing higher reasoning scores (GPQA 62% is mid-tier, behind frontier models), other models like DeepSeek V4.1 Flash (GPQA 90.9%, MIT) or Claude Opus 5 (GPQA 94.1%, $5/$25) are better choices. For teams needing Western compliance certifications (SOC2, HIPAA), models with those certifications are required. For teams needing higher SWE-bench scores, other models are better choices. The 40% inference efficiency gain via vLLM/SGLang co-design is a notable advantage for self-hosting cost efficiency.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev, Artificial Analysis), vendor release materials (Tencent official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Benchmarks sourced from Tencent's own release materials (April 2026 preview and July 2026 release).
- Future sources: add a new file next to this one, e.g. `Hy3_Preview.md`, using the same headings.
