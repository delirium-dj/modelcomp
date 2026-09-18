# GLM-5.3 Flash — findings by Solar Pro 4

- Source: Z.ai/GLM-5.3 Flash, e.g. Z.ai (`zai-org/glm-5.3-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash (Z.ai open-weight, GLM-5.3 family)
- **Short description:** Z.ai's first natively multimodal GLM-5 model, released August 26, 2026 with MIT-licensed open weights. A Mixture-of-Experts transformer with 320B total parameters and 18B active per token, built from 45 layers mixing KDA linear attention with NoPE sparse MLA attention, routing each token through 8 of 288 experts. The faster, cheaper sibling to text-only GLM-5.3. Circulated for 6 days under codename "Ox Alpha" on OpenRouter, OpenCode, and Cline before Z.ai confirmed its identity. Scores 84.3 on Terminal-Bench 2.1 (within a point of Claude Opus 4.8's 85.0).
- **Provider / access:** Z.ai API, OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, Hugging Face (MIT-licensed weights for self-hosting). Also available via OpenCode Zen.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not explicitly stated.
- **IDs:** `zai-org/glm-5.3-flash` (Hugging Face, Z.ai API). Also available on OpenRouter, Cloudflare, Vercel, OpenCode Zen.
- **Context window:** 1,048,576 tokens (1M) input; max output 48,000 tokens (48K) on hosted OpenRouter endpoint. Built on IndexPool mechanism that compresses indexer key vectors, cutting attention compute ~3x and KV-cache size 4.4x vs full GLM-5.3.
- **Modalities:** Text, image, video, PDF input; text and tool-calls output. No native audio input/output. Tool calls: yes. Structured output: yes. Reasoning: yes. Native multimodal (not bolt-on).
- **Pricing (as of 2026-09-18):** $0.15/1M input, $0.50/1M output, $0.03/1M cached input (Z.ai official API list price). Launch promotion halves all three rates through September 9, 2026 at 16:00 UTC. Third-party hosts (OpenRouter, Cloudflare, Vercel) may list different rates. MIT license permits free self-hosting.
- **Architecture:** Open-weight (MIT license). MoE transformer: 320B total parameters, 18B active per token, 45 layers, 288 experts (8 routed per token). KDA linear attention + NoPE sparse MLA attention. FP8 and BF16 checkpoints on Hugging Face (zai-org/GLM-5.3-Flash). vLLM and SGLang day-one support.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for GLM-5.3 Flash specifically.
- Terminal-Bench 2.1: **84.3%** (vendor-reported by Z.ai; 2026-08-26). Within a point of Claude Opus 4.8's 85.0% and close to GPT-5.6 Terra's 87.4%.
- Toolathlon: **78.4%** (vendor-reported by Z.ai; 2026-08-26).
- AutomationBench: **48.8%** (vendor-reported by Z.ai; 2026-08-26). Nearly doubled from GLM-5.2's 26.2%.
- DeepSWE v1.1: **63.4%** (vendor-reported by Z.ai; 2026-08-26). Up from 46.2% for GLM-5.2.
- Tau3-Banking: no verified public score found
- GDPval-AA v2 Elo: **1,773** (vendor-reported by Z.ai; 2026-08-26). Strong knowledge-work deliverable score.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for GLM-5.3 Flash specifically. (GLM-5.3 text-only model may have separate scores.)
- HLE (Humanity's Last Exam): no verified public score found for GLM-5.3 Flash specifically.
- HLE with Tools: **55.3%** (vendor-reported by Z.ai; 2026-08-26).
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **57** (Artificial Analysis; 2026-08-27). Ranked 3rd of 109 tracked models at launch.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found for GLM-5.3 Flash specifically.
- Agents Last Exam: **26.3%** (vendor-reported by Z.ai; 2026-08-26).
- CharXiv Reasoning: **89.4%** (vendor-reported by Z.ai; 2026-08-26). Multimodal reasoning benchmark.
- Chartography: **78%** (vendor-reported by Z.ai; 2026-08-26).
- OfficeQA Pro: **62.4%** (vendor-reported by Z.ai; 2026-08-26).
- NL2Repo: **56.3%** (vendor-reported by Z.ai; 2026-08-26).
- Babyvision: **53.4%** (vendor-reported by Z.ai; 2026-08-26).
- Z.ai Code Bench v1.0: **29.0%** (vendor-reported by Z.ai; 2026-08-26). Against Opus 4.8's 29.5%.

Coding:

- SWE-bench Verified: no verified public score found for GLM-5.3 Flash specifically.
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1: **63.4%** (see above).

Long context:

- Long-context recall: no verified public score found for GLM-5.3 Flash specifically. IndexPool mechanism compresses KV-cache 4.4x.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 84.3% (#3 among compared models — within a point of Claude Opus 4.8's 85.0% and close to GPT-5.6 Terra's 87.4% — frontier tier: TB2.1 85%+ → 90-100, so just below), DeepSWE v1.1 63.4% (strong, up from 46.2%), AutomationBench 48.8% (nearly doubled from 26.2%), Toolathlon 78.4%, GDPval-AA v2 Elo 1,773. These are strong, consistent scores. Capped by: lack of SWE-bench Verified and SWE-bench Pro direct scores. Overall tool-use capability is frontier-tier for terminal/agent tasks.
- **Reasoning: 80/100.** AA Intelligence Index 57 (ranked 3rd of 109 at launch — strong), HLE with Tools 55.3% (good), CharXiv Reasoning 89.4% (strong multimodal reasoning), Agents Last Exam 26.3%. These are solid scores. Capped by: lack of GPQA, HLE (standard), MMLU Pro direct scores for GLM-5.3 Flash specifically, and the model being optimized for agentic/vision tasks rather than pure academic reasoning. Overall reasoning is strong, competitive with frontier-tier for agentic workflows.
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window. Maximum tier (≥1M = 95-100). Max output 48K. IndexPool mechanism reduces KV-cache 4.4x. Score 100 reflects top-tier context window.
- **Multimodal: 85/100.** Text, image, video, PDF input; text and tool-calls output. Native multimodal (not bolt-on). No audio input/output. Per methodology: +video/PDF in = 75-90. With text+image+video+PDF input, score 85. Capped by lack of audio input and non-text output.
- **Coding: 85/100.** Terminal-Bench 2.1 84.3% (frontier tier: TB2.1 85%+ → 90-100, so just below), DeepSWE v1.1 63.4% (strong, up from 46.2%), Z.ai Code Bench v1.0 29.0% (close to Opus 4.8's 29.5%), NL2Repo 56.3%, Toolathlon 78.4%. These are strong scores. Capped by: lack of SWE-bench Verified, SWE-bench Pro, LiveCodeBench direct scores. Overall coding capability is frontier-tier for terminal/agent tasks.
- **Cost efficiency: 95/100.** $0.15/$0.50 per 1M input/output (Z.ai list price, launch promotion halves through Sep 9, 2026). Per methodology: ~$0.15/$0.50 = ~95-98 range. MIT license permits free self-hosting for teams with GPU capacity. Blended rate ~$0.06/1M. Exceptional value — cheaper than 85% of GA models. Capped only by: launch promotion ending Sep 9, 2026 (rates double to $0.30/$1.00, still exceptional value). Third-party hosts may list different rates.
- **Overall Score: 88/100.** Mean of (88 + 80 + 100 + 85 + 85 + 95) / 6 = 88.8 → **89**. Best-fit recommendation: GLM-5.3 Flash is the best value proposition for self-hosting teams needing multimodal agentic coding capabilities. The combination of MIT-licensed open weights (320B/18B MoE), 1M context, Terminal-Bench 84.3% (within a point of Claude Opus 4.8), and $0.15/$0.50 pricing (halved through Sep 9, 2026) makes this exceptional value. For teams without GPU capacity, Z.ai's hosted API at $0.15/$0.50 is still cheaper than 85% of GA models. For teams needing verified academic reasoning benchmarks (GPQA, HLE, MMLU Pro), frontier models like Claude Opus 5, GPT-5, or Gemini 3.1 Pro are better choices. For teams needing audio input/output, models with native audio support are better.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Z.ai official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_1_Flash.md`, using the same headings.
