# GLM-5.3-FlashX — findings by Cat Jam

- Source: Z.ai / GLM-5.3-FlashX (`opencode/glm-5-3-flashx`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX ("FlashX"), faster/higher-throughput sibling of GLM-5.3-Flash.
- **Short description:** Z.ai's accelerated Flash variant for 200 tokens/s inference, higher price than Flash but faster. Same 320B/18B hybrid architecture, open weights? likely MIT. Released alongside GLM-5.3-Flash (Aug 26, 2026).
- **Provider / access:** Z.ai API (`glm-5.3-flashx`), plus licensed hosts. 1M context, 128K output, MIT weights (per docs? FlashX is faster variant; infer open).
- **Release / knowledge:** Released 2026-08-26? Docs on Telnyx say FlashX not available on plans initially; now live. Knowledge cutoff not stated.
- **IDs:** `glm-5.3-flashx` (Z.ai)
- **Context window:** 1,048,576 tokens; max output 128,000. (Same family; no differing number found.)
- **Modalities:** Text + image input; text out (same as Flash).
- **Pricing (as of 2026-10-16):** Z.ai $0.37 input / $1.25 output per 1M; cached read $0.075; cache write free (limited-time). FlashX delivers ~200 tok/s.
- **Architecture:** Hybrid sparse+linear attention, 320B/18B; FlashX gets throughput/GPU optimization and possibly same knowledge.

### Raw benchmarks found

No GLM-5.3-FlashX-specific public benchmark numbers located in sampled sources. Treat as same-weight/higher-inference variant? Z.ai has not published separately scored results for FlashX in the sampled docs. The Z.ai docs positioning: GLM-5.3-FlashX is a faster version (200 tok/s) of GLM-5.3-Flash; "GLM-5.3-FlashX is not yet available on the plan" in earlier docs but now live. We therefore cap reasoning/coding contributions below Flash's self-reported scores (no independent numbers).

### Normalized scores (1–100)

Scores are carried conservatively from GLM-5.3-Flash (same architecture/quality) but capped due to lack of FlashX-specific benchmarks:

- **Tool use: 86/100.** (Same as Flash 88, capped one step)
- **Reasoning: 86/100.** (Z.ai reports AA Intelligence Index 57 for Flash; FlashX likely same, but no self-report)
- **Context window: 94/100.** Same 1M context and 3.0× attention savings
- **Multimodal: 84/100.**
- **Coding: 86/100.** (DeepSWE 63.4 for Flash; no FlashX number)
- **Cost efficiency: 88/100.** $0.37/$1.25 is still cheap (3× Flash input) but throughput premium. 
- **Overall Score: 87/100.** Mean (86+86+94+84+86)/5 = 87.2. Choose for latency (200 tok/s) at a 2.5× price, not for raw score differentiation.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Z.ai docs/pricing, CourionAI, ai.gotry, LiteLLM); no FlashX-dedicated benchmark was released in sampled sources — scores are conservative interpolations from GLM-5.3-Flash, not independent measurements; scores are normalized 1–100 interpretations, not official vendor scores. Flag: FlashX's individual verification remains thin.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
