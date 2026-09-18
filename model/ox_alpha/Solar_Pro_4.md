# Ox Alpha — findings by Solar Pro 4

- Source: Z.ai/Ox Alpha, e.g. Z.ai (`zai-org/glm-5.3-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (Z.ai open-weight, GLM-5.3 Flash codename)
- **Short description:** GLM-5.3 Flash circulated for 6 days under codename "Ox Alpha" on OpenRouter, OpenCode, and Cline before Z.ai confirmed its identity as GLM-5.3 Flash on August 26, 2026. This folder (ox_alpha) is likely a duplicate of glm-5.3-flash — the same model under a codename. The report should be identical to glm-5.3-flash/Solar_Pro_4.md.
- **Provider / access:** OpenCode Zen, OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, Hugging Face (MIT-licensed weights). Same as GLM-5.3 Flash.
- **Release / knowledge:** Circulated as "Ox Alpha" starting Aug 20, 2026; confirmed as GLM-5.3 Flash on Aug 26, 2026. Knowledge cutoff not explicitly stated.
- **IDs:** Same as GLM-5.3 Flash: `zai-org/glm-5.3-flash` (Hugging Face, Z.ai API). Also available on OpenRouter, Cloudflare, Vercel, OpenCode Zen.
- **Context window:** 1,048,576 tokens (1M) input; max output 48,000 tokens (48K) on hosted OpenRouter endpoint. Same as GLM-5.3 Flash.
- **Modalities:** Text, image, video, PDF input; text and tool-calls output. Same as GLM-5.3 Flash.
- **Pricing (as of 2026-09-18):** $0.15/1M input, $0.50/1M output, $0.03/1M cached input (Z.ai official API list price). Launch promotion halves all three rates through Sep 9, 2026 at 16:00 UTC. Same as GLM-5.3 Flash.
- **Architecture:** Open-weight (MIT license). MoE: 320B total parameters, 18B active per token, 45 layers, 288 experts (8 routed per token). KDA linear attention + NoPE sparse MLA attention. Same as GLM-5.3 Flash.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor-reported by Z.ai; 2026-08-26). Within a point of Claude Opus 4.8's 85.0%. Same as GLM-5.3 Flash.
- Toolathlon: **78.4%** (vendor-reported by Z.ai; 2026-08-26). Same as GLM-5.3 Flash.
- AutomationBench: **48.8%** (vendor-reported by Z.ai; 2026-08-26). Same as GLM-5.3 Flash.
- DeepSWE v1.1: **63.4%** (vendor-reported by Z.ai; 2026-08-26). Same as GLM-5.3 Flash.
- GDPval-AA v2 Elo: **1,773** (vendor-reported by Z.ai; 2026-08-26). Same as GLM-5.3 Flash.
- SWE-bench Verified: no verified public score found (same as GLM-5.3 Flash).
- SWE-bench Pro: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (same as GLM-5.3 Flash).
- HLE with Tools: **55.3%** (vendor-reported by Z.ai; 2026-08-26). Same as GLM-5.3 Flash.
- Artificial Analysis Intelligence Index: **57** (Artificial Analysis; 2026-08-27). Ranked 3rd of 109 tracked models at launch. Same as GLM-5.3 Flash.
- MMLU Pro: no verified public score found
- CharXiv Reasoning: **89.4%** (vendor-reported by Z.ai; 2026-08-26). Same as GLM-5.3 Flash.
- HLE: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 63.4%, Toolathlon 78.4%, Z.ai Code Bench v1.0 29.0%. Same as GLM-5.3 Flash.

Long context:

- Long-context recall: no verified public score found. IndexPool mechanism compresses KV-cache 4.4x. Same as GLM-5.3 Flash.

### Normalized scores (1–100)

- **Tool use: 88/100.** Same as GLM-5.3 Flash. Terminal-Bench 2.1 84.3%, DeepSWE v1.1 63.4%, AutomationBench 48.8%, Toolathlon 78.4%, GDPval-AA v2 Elo 1,773.
- **Reasoning: 80/100.** Same as GLM-5.3 Flash. AA Intelligence Index 57 (ranked 3rd of 109), HLE with Tools 55.3%, CharXiv Reasoning 89.4%.
- **Context window: 100/100.** Same as GLM-5.3 Flash. 1M+ context, 48K max output, IndexPool KV-cache compression 4.4x.
- **Multimodal: 85/100.** Same as GLM-5.3 Flash. Text, image, video, PDF input; text and tool-calls output. No audio I/O.
- **Coding: 85/100.** Same as GLM-5.3 Flash. Terminal-Bench 2.1 84.3%, DeepSWE v1.1 63.4%, Z.ai Code Bench v1.0 29.0% (close to Opus 4.8's 29.5%).
- **Cost efficiency: 95/100.** Same as GLM-5.3 Flash. $0.15/$0.50 per 1M (launch promotion halves through Sep 9, 2026). MIT license free self-hosting.
- **Overall Score: 88/100.** Mean of (88 + 80 + 100 + 85 + 85 + 95) / 6 = 88.8 → **89**. Same as GLM-5.3 Flash. Best-fit recommendation: Same as GLM-5.3 Flash — best value for self-hosting teams needing multimodal agentic coding capabilities with MIT-licensed open weights. Ox Alpha is simply the codename for GLM-5.3 Flash — same model, same benchmarks, same pricing.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (Z.ai official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Note: Ox Alpha is the codename for GLM-5.3 Flash — this report is identical to glm-5.3-flash/Solar_Pro_4.md.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash.md`, using the same headings.
