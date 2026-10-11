# Nemotron 3 Ultra Free — findings by Space Bunny

- Source: NVIDIA / OpenCode Zen (`nvidia/nemotron-3-ultra-550b-a55b`; free tier)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 72.8 → 56.2.** The prior pass cited **only NVIDIA's model card and BenchLM's transcription of it**, and recorded that "Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas" and "LCR/MLCR, hallucination metrics" were unavailable. Artificial Analysis has now run the model on **51 BenchLM rows**, and the independent agentic picture is very poor: **AutomationBench 3.0%**, **Terminal-Bench 4.0 0.5%**, **Tau3-Banking 14.2%**, **AnalystAgent 6.3%**, **GDP.pdf 5.0%**, **Agentic Index 21.7%**. Restated: **Tool 84 → 52**, **Reasoning 83 → 68**, **Context 94 → 78**, **Coding 88 → 68**, **Multimodal unchanged at 15**, **Cost unchanged at 100**.

## Model card

- **Name:** Nemotron 3 Ultra (Free tier)
- **Short description:** NVIDIA's open-weight hybrid Mamba-Transformer MoE for reasoning, coding, planning, tool calling, and long-running agents, accessed through a free Zen route. **Solid academic knowledge and unusually good instruction-following; near-floor on sustained agentic work.**
- **Provider / access:** **OpenCode Zen free tier `opencode/nemotron-3-ultra-free`** — confirmed present in Zen's docs endpoint table, its pricing table at Free/Free/Free, and its "free models" list, with a **zero-retention / no-training data policy** explicitly stated for this route; NVIDIA NIM `nvidia/nemotron-3-ultra-550b-a55b` with an OpenAI-compatible endpoint; weights `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B`.
- **Release / knowledge:** **2026-06-04** (BenchLM). **No reliable knowledge cutoff is published.**
- **IDs:** `opencode/nemotron-3-ultra-free`; `nvidia/nemotron-3-ultra-550b-a55b`; `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B`.
- **Context window:** **1M tokens** (NVIDIA model page and BenchLM). BenchLM notes a **262K default serving configuration** in some provider metadata, and the prior pass recorded that exact maximum output was not sourced — **still not published.**
- **Modalities:** **Text in / text out.** Reasoning mode and tool calling supported. **No image, audio, or video input is claimed.** NVIDIA's separate **Nemotron 3 Nano Omni 30B A3B** covers multimodal work.
- **Pricing (verified 2026-10-10):** **Free** — Zen lists Free / Free / Free for `nemotron-3-ultra-free`, and the route is explicitly marked as following **zero-retention, no-training** data policy. The free tier is an access tier, not a guarantee of unlimited production inference.
- **Architecture:** Open-weight **hybrid Mamba-Transformer MoE, ~550B total / 55B active.** **AA Openness Index 83.3%** — one of the highest measured, indicating genuinely permissive weights. Exact licence still not exposed by the fetched NVIDIA page.

### Raw benchmarks found

**Independent — new this pass (Artificial Analysis, Vals AI):**

Agent / tool use — **this is where the model fails:**

- **AA AutomationBench: 3.0%** — *near-total failure on SaaS workflow automation*
- **AA Terminal-Bench 4.0: 0.5%** — *effectively zero on the current-generation terminal harness*
- **AA Tau3 Banking: 14.2%**; **AA-AnalystAgent: 6.3%**; **GDP.pdf: 5.0%**; **AA EnterpriseOps-Gym: 28.9%**
- **AA Agentic Index: 21.7%**; AA Briefcase **876 Elo**
- **τ²-bench: 83.3%** (Artificial Analysis) — alongside NVIDIA's own **τ³-bench 70.9%**
- **AA Harvey LAB v1.0: 81.7%** — *legal agentic work, hallucination-gated all-pass; a genuine and specific strength*
- Terminal-Bench Hard **36.4%** (AA)
- **Terminal-Bench 2.1: 56.4% (NVIDIA) / 53.9% (AA) / 50.9% (Vals AI)** — *three sources within 5.5 points, the tightest multi-source agreement on this benchmark in the batch*

Reasoning / knowledge:

- **GPQA Diamond: 87.0% (NVIDIA) / 86.7% (AA) / 86.1% (Vals AI)** — *excellent three-source agreement*
- **MMLU-Pro: 86.8% (NVIDIA) / 85.8% (Vals AI)**
- **HLE: 26.7% (NVIDIA) / 28.4% (AA)**
- **AA-Omniscience Index: −0.4%**; **Accuracy: 21.6%**; **Hallucination Rate: 29.7%** — *a good reliability profile, comparable to GLM-5.2's 26.3%*
- **AA-Intelligence Index: 22.9%**
- **CritPt: 3.1%** (NVIDIA)

Coding:

- **AA Coding Index: 49.3%**; **AA-SciCode: 40.3%**; SciCode **44.6%** (NVIDIA)
- **SWE-bench Verified: 71.9% (NVIDIA) / 69.0% (Vals AI)**; **LiveCodeBench v6: 89.0% (NVIDIA) / 86.0% (Vals AI)**; SWE Multilingual **67.7%**

Long context — **the single most damaging new result:**

- **MLCR-AA: 11.1%** (Artificial Analysis) — *near-zero long-context reasoning*
- **AA-LCR: 67.0%**; LongBench v2 **61.9%** (both NVIDIA)

Instruction following:

- **IFBench: 81.7% (NVIDIA) / 81.4% (AA)** — *strong, and corroborated*
- **AA Openness Index: 83.3%**; MMLU-ProX **83%** (NVIDIA)

**BenchLM composite: 47.16/100, #111 of 889** (51 of 625 benchmarks). NVIDIA family: Nemotron 3 Nano Omni 30B A3B **32.15**, Nemotron 3.5 Lightning **27.03**, Nemotron-4 15B **10.01**.

Sources consulted: [BenchLM Nemotron 3 Ultra (updated 2026-10-10)](https://benchlm.ai/models/nemotron-3-ultra), [NVIDIA Nemotron 3 Ultra Hugging Face model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16), [NVIDIA NIM Nemotron 3 Ultra](https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b), [Vals AI Nemotron 3 Ultra](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b), [Artificial Analysis Nemotron 3 Ultra](https://artificialanalysis.ai/models/nvidia-nemotron-3-ultra-550b-a55b) and its AutomationBench / Tau3-Banking / Briefcase / EnterpriseOps-Gym / AnalystAgent / Harvey LAB / Terminal-Bench / GDPval-AA / MLCR / SciCode / Coding Index / Omniscience leaderboards, and [OpenCode Zen](https://opencode.ai/docs/zen), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 52/100.** **Down from 84 — a 32-point correction, the second-largest in this batch.** The prior 84 rested on **NVIDIA's own card** (Terminal-Bench 56.4%, τ³-bench 70.9%, BrowseComp 44.4%, PinchBench 90.0%) and noted that "GDPval, Toolathlon, and MCP rows" were missing. Independent measurement is unambiguous: **AutomationBench 3.0%**, **Terminal-Bench 4.0 0.5%**, **Tau3-Banking 14.2%**, **AnalystAgent 6.3%**, **GDP.pdf 5.0%**, **Agentic Index 21.7%**, **Briefcase 876 Elo**. **This is the fourth model in this batch** showing strong narrow-domain τ-bench scores (τ² 83.3%) alongside near-floor general agentic measurement — the pattern is now well established. Two genuine credits: **AA Harvey LAB at 81.7%** shows real capability on legal agentic work, and **Terminal-Bench 2.1 at 56.4 / 53.9 / 50.9 across three sources** is the tightest multi-source agreement on any benchmark in this batch.
- **Reasoning: 68/100.** Down from 83. **Knowledge is solid and well-corroborated: GPQA Diamond 87.0% / 86.7% / 86.1% across three sources, MMLU-Pro 86.8% / 85.8%, MMLU-ProX 83%.** **Hallucination Rate 29.7% with an Omniscience Index of −0.4%** is a good reliability profile — comparable to GLM-5.2 and among the best measured. **IFBench 81.7% / 81.4%** confirms the model follows instructions well. The reductions: **HLE 26.7% / 28.4%** is low, **CritPt 3.1%** is very low, and the **AA Intelligence Index of 22.9** is modest. **No knowledge cutoff is published.**
- **Context window: 78/100.** **Down from 94 — a 16-point fall, driven by the worst long-context result in the batch.** The **1M window** is verified and the prior pass's **LongBench v2 61.9%** is real. But **MLCR-AA at 11.1%** is near-zero, and **AA-LCR at 67.0%** is only moderate. A 1M window with MLCR at 11.1% is a specification, not a capability — the model accepts the tokens and cannot use them. This is the same single-harness-versus-multi-harness pattern seen on Muse Glimmer (AA-LCR 83.3% but MLCR 20.0%), GLM-5.2 (AA-LCR 78.3%) and GLM-5.3 (AA-LCR 79.7% but MLCR 48.3%) — and Nemotron is the extreme case. **BenchLM's note of a 262K default serving configuration** compounds the doubt about the 1M figure in practice.
- **Multimodal: 15/100.** Unchanged. The reviewed official model page lists **text input/output only**; no image, audio, or video capability is claimed. **Design Arena Website 1,145 Elo** measures text-and-code output quality, not non-text input. NVIDIA's **Nemotron 3 Nano Omni 30B A3B** is the multimodal option.
- **Coding: 68/100.** **Down from 88.** The top-line figures are strong and corroborated: **SWE-bench Verified 71.9% / 69.0%**, **LiveCodeBench v6 89.0% / 86.0%** — two independent sources agreeing closely on both. But the independent composite **AA Coding Index is 49.3%** and **AA-SciCode 40.3%** (NVIDIA's own SciCode is 44.6%), which is far below the vendor headline. **SWE-bench Pro, DeepSWE, and Vibe Code Bench remain unpublished.** The prior 88 was based on LiveCodeBench 89.0% and SWE-bench Verified 71.9% alone; with a Coding Index at 49.3% and Terminal-Bench 4.0 at 0.5%, the model's agentic coding ability is clearly much weaker than its single-shot generation ability.
- **Cost efficiency: 100/100.** Unchanged, and now fully verified. **`nemotron-3-ultra-free` is confirmed present** in OpenCode Zen's endpoint table, its pricing table at Free/Free/Free, and its free-models list — and unlike most Zen free routes, **this one carries an explicit zero-retention, no-training data policy**, which makes it viable for sensitive work. Combined with **an AA Openness Index of 83.3%** on the weights, this is the best privacy-and-cost profile in the batch. Self-hosting 550B total / 55B active remains expensive, but the free tier removes provider cost entirely.
- **Overall Score: 56.2/100.** (52 + 68 + 78 + 15 + 68) / 5 = 281 / 5 = 56.2, down from 72.8. **Best fit: free, privacy-preserving work where instruction-following and academic knowledge matter more than agency — legal research (Harvey LAB 81.7%), document analysis, and structured extraction on a zero-retention route.** **Four hard limits.** First, **AutomationBench 3.0%, Terminal-Bench 4.0 0.5%, Tau3-Banking 14.2%, AnalystAgent 6.3%** — it will not run an autonomous agentic loop under any framing. Second, **MLCR-AA 11.1%** — do not put this model in a 1M-token context; use the 262K default and expect degradation well before that. Third, **HLE 26.7% and CritPt 3.1%** — weak on hard reasoning despite GPQA 87%. Fourth, **the score is structurally suppressed by Multimodal 15**; on the four text-relevant dimensions alone it scores **66.5**. And the standing caveat: **the free tier is promotional and explicitly time-limited** — this is not a production cost guarantee.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Nemotron 3 Ultra profile, NVIDIA's official Nemotron 3 Ultra Hugging Face model card, NVIDIA NIM's Nemotron 3 Ultra page, Vals AI's Nemotron 3 Ultra leaderboards, Artificial Analysis's Nemotron 3 Ultra benchmark rows and eleven associated leaderboards, and OpenCode Zen's documentation and pricing; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass cited NVIDIA's model card and nothing else**, and its own caveats listed the exact gaps that have since closed unfavourably. **Artificial Analysis now supplies 51 BenchLM rows including the entire agentic block**, and the results are near-floor: **AutomationBench 3.0%, Terminal-Bench 4.0 0.5%, Tau3-Banking 14.2%, AnalystAgent 6.3%, GDP.pdf 5.0%**, driving Tool use from 84 to 52. **MLCR-AA at 11.1% is the single most damaging figure** and causes Context to fall from 94 to 78 despite the 1M window being real and verified — this is now the **fifth model in this batch** where one long-context harness disagrees sharply with another, and Nemotron is the most extreme case yet. **Credit where due, and it is substantial:** GPQA agrees across three sources within 0.9 points (87.0/86.7/86.1), **Terminal-Bench 2.1 agrees across three sources within 5.5 points** (56.4/53.9/50.9) — both far tighter than any vendor/independent split seen elsewhere in this batch — and **Hallucination Rate 29.7% with IFBench 81.4–81.7%** make this one of the more trustworthy models measured. **Two new strengths are credited:** **AA Harvey LAB 81.7%** (legal agentic work, hallucination-gated) and the **AA Openness Index 83.3%**. Cost efficiency is re-verified at 100 against Zen's live catalog rather than repository metadata, and the route's **zero-retention / no-training policy** is now documented rather than assumed. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct primary retrievals plus eleven cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Ultra_Free_Recheck.md`, using the same headings.