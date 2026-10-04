# Qwen3.8 Flash Next — findings by Space Bunny

- Source: Alibaba (`Qwen/Qwen3.8-Flash-Next`; Zen route `opencode/qwen-3.8-flash-next`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash Next (open-weights preview; distinct from the hosted `Qwen3.8-Flash` API)
- **Short description:** Alibaba's open-weights preview of the architecture that will underpin Qwen4 — a multimodal MoE that plays the same "release the architecture early" role Qwen3-Next played for Qwen3.5. It is **not** the Qwen Cloud `Qwen3.8-Flash` product: that managed SKU is a different build on top of it, with 1M context by default and official built-in tools. Flagged as a variant sibling, not an alias — different SKU, same architecture family.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.8-Flash-Next`) and ModelScope; served OpenAI-compatible via SGLang / vLLM / TokenSpeed (`http://localhost:8000/v1`, Chat Completions). Hosted production sibling `qwen3.8-flash` on Qwen Cloud (`https://maas.qwencloudapi.com/compatible-mode/v1`, Chat Completions + Responses API). Zen exposes it as `qwen-3.8-flash-next` at `https://opencode.ai/zen/v1/...`.
- **Release / knowledge:** released 2026-08-26 (weights + blog same day). Knowledge cutoff not published — **unknown**.
- **IDs:** `opencode/qwen-3.8-flash-next` (Zen; Responses-style gateway). No Free ID exists on Zen — scored on paid pricing.
- **Context window:** 262,144 tokens native, extensible to 1,000,000 via YaRN RoPE scaling (HF model card). Qwen warns static YaRN can hurt short prompts; `--max-model-len 1000000` is the documented 1M path. Max output 128K reported by LLMLearner; the Qwen Cloud sibling allows 131,072 max output with a 262K max-reasoning budget.
- **Modalities:** text, image, video in; text out (HF `pipeline_tag: image-text-to-text`). Reasoning: on by default, `<think>` blocks, configurable via `enable_thinking` / `preserve_thinking` / `reasoning_effort` (`xhigh` default, `medium`, `low`). Tool calling: native `qwen3_coder` tool-call parser, Chat Completions + tool templates in the HF repo. Structured/JSON output supported on the Qwen Cloud build.
- **Pricing (as of 2026-10-04):** Qwen Cloud `qwen3.8-flash` — $0.15 in / $0.47 out per 1M; implicit cache $0.016, explicit cache write $0.20, cache read $0.016 (Qwen Cloud price page). The open-weight Next itself carries **no published hosted list price of its own** — the prices above belong to the production sibling, and are used here as the closest verified price point. Vector Wire tracks 4 providers; DeepInfra undercuts at $0.11/$0.38. Cheaper than 80% of 328 priced models at a 3:1 input:output blend.
- **Architecture:** 176B total — a 125B main MoE plus a 51B n-gram embedding table — with **6B activated** per token, and a further 4B in the MTP head. 48 layers, hidden dimension 2560, 512 MoE experts (10 routed + 1 shared, expert intermediate dim 640), 20M bigram/trigram n-gram embeddings applied at layer 2, Gated DeltaNet + Qwen Sparse Attention hybrid (3:1 linear-to-sparse), 4-branch Gated Residual (bottleneck rank 320), 1-layer MTP. Open weights under **qwen-community-1.0** (commercial use with conditions); BF16 and FP8 (128-block fine-grained) checkpoints published.

### Raw benchmarks found

> 46 results across 43 benchmarks from 5 sources (Vector Wire rollup, latest 2026-10-04); 8 independently verified. Most numbers are **vendor-reported** by Qwen under its own harness — comparison columns in the card are Qwen's own rival selection. Figures below are the HF model card / Qwen blog as aggregated by LLMLearner (2026-10-04) unless noted.

Agent / tool use:

- Toolathlon Verified (multi-tool orchestration): **73.5%** (#15/35, with tools, extra-high)
- τ³-Banking (service workflows): **45.4%** (#13/107, thinking + tools)
- Terminal-Bench 2.1 (agentic development): **86.1%** (#16/55, thinking + tools)
- Terminal-Bench 4.0: **25.3%** (#22/58, thinking + tools)
- OSWorld 2.0 (desktop workflows): **52.3%** partial / 19.4% binary (#12/13) — HF card reports the partial figure
- AndroidWorld (mobile/browser agent): **84.5%** (#1/1, extra-high + tools)
- CoWorkBench (office/business): **73.9%** (#3/3)
- Job Bench: **55.7%** (#7/8) · RecreationBench: **49.9%** (#1/1) · ClawEval-MM: **60.4%** (#2/2)
- Vision2Web (multimodal web agent): **64.0%** (#1/1)
- IFBench (instruction following): **81.3%** (#6/41, extra-high, no tools)
- MCP-Atlas / Toolathon / SWE Atlas Codebase QnA: no verified public score found
Reasoning / knowledge:

- GPQA Diamond: **91.7%** (#29/189, extra-high, no tools)
- HLE: **35.9%** (#67/131, extra-high, no tools)
- CritPt: **11.1%** (#44/124, thinking, no tools)
- LiveBench: **76.2%** (#26/102)
- Artificial Analysis Intelligence Index: no verified public score found (Vector Wire rates reasoning −19.7% vs leader, math −40.5%)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench (v6): **91.9%** (#3/120, extra-high, no tools)
- SWE-bench Verified: no verified public score found for this exact checkpoint
- SWE-bench Pro (Public): **62.5%** (#13/60, extra-high + tools)
- SWE-bench Multilingual: **81.0%** (#8/29, extra-high + tools)
- DeepSWE 1.1 (repository engineering): **58.7%** (#32/48, extra-high + tools)
- NL2Repo-Bench: **48.1%** (#14/18, extra-high + tools) — the one clear loss vs DeepSeek-V4-Flash-0731 (54.2)
- SciCode: **50.6%** (#39/89, thinking, no tools)
- Self-reported vs DeepSeek-V4-Flash-0731 (LLM Stats): DeepSWE 58.7 vs 54.4, SWE-Pro 62.5 vs 56.0, Toolathlon 73.5 vs 70.3, LiveCodeBench v6 91.9 vs 90.6, GPQA 91.7 vs 90.8, NL2Repo 48.1 vs 54.2

Long context:

- No long-context retrieval benchmark (RULER / MRCR / GraphWalks / LVBench needle) reported at a stated window length — **no long-context retrieval reported**. Native 262,144 tokens; 1M requires YaRN scaling, with Qwen explicitly warning that static YaRN can degrade shorter-text performance.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 86.1% and AndroidWorld 84.5% show real agentic execution, and Toolathlon Verified 73.5% is mid-field (#15/35) — but OSWorld binary 19.4%, τ³-Banking 45.4% (#13/107) and Terminal-Bench 4.0 25.3% cap it well below frontier tool stacks.
- **Reasoning: 78/100.** GPQA Diamond 91.7% (#29/189) is genuinely strong, but HLE 35.9% (#67/131) and CritPt 11.1% (#44/124) are weak in absolute terms — high-difficulty knowledge and scientific reasoning are the gap that keeps this below the leaders Vector Wire ranks 4 of 6 on reasoning and 1 of 5 on math.
- **Context window: 88/100.** 262,144 native is a genuinely large window and the 1M YaRN path is documented, but 1M is opt-in scaling rather than native, static YaRN carries a vendor-stated short-prompt penalty, and no long-context retrieval benchmark was published to verify the claim.
- **Multimodal: 89/100.** Text/image/video in with strong vision numbers — MathVision 95.7% (#2/8), CharXiv RQ 90.6% (#2/11), RealWorldQA 88.5%, MMMU-Pro 79.8%, LVBench 76.6% — capped by GDP.pdf 15.6% (#29/82) on document/PDF reasoning and Vision2Web 64.0%.
- **Coding: 85/100.** LiveCodeBench 91.9% (#3/120) and SWE-bench Multilingual 81.0% are elite-tier, SWE-bench Pro 62.5% (#13/60) and DeepSWE 58.7% are solid mid-field, and NL2Repo-Bench 48.1% (#14/18) — its one clear regression against DeepSeek-V4-Flash — plus no published SWE-bench Verified hold it below the top coding tier.
- **Cost efficiency: 94/100.** $0.15/$0.47 per 1M on the production sibling (DeepInfra $0.11/$0.38) is cheaper than 80% of 328 priced models at a 3:1 blend; not 100 because the open-weight Next has no price of its own and the served sibling is paid, not a free tier.
- **Overall Score: 83/100.** Best-fit as a cheap, wide-context multimodal agentic/coding workhorse with elite algorithmic coding — not a frontier reasoning or knowledge model, and not a 1M-native one. Mean of the five non-cost dims: (76 + 78 + 88 + 89 + 85) / 5 = 83.2 → 83.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-04
- Method: public internet research (Hugging Face model card, Qwen blog + GitHub, Qwen Cloud pricing page, OpenCode Zen docs, LLMLearner, LLM Stats, Vector Wire rollup); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported benchmarks are labelled as such.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash_Next_2.md`, using the same headings.